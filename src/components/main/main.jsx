import { useEffect, useState } from 'react';
import './main.css';

const Main = () => {
    const [images, setImages] = useState([])

    const [dogImages, setDogImages] = useState(false)
    const [catImages, setCatImages] = useState(true)
    const [foodImages, setFoodImages] = useState(false)

    const [notGettingError, setNotGettingError] = useState(false);

    const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10'
    const DOG_API_URL = 'https://api.thedogapi.com/v1/images/search?limit=10'
    const FOOD_API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'

    useEffect(() => {
        if(catImages){
            console.log(catImages, 'cat')
            fetchImages(CAT_API_URL)
        } else if (dogImages) {
            console.log('Dog')
            fetchImages(DOG_API_URL)
        } else {
            console.log('food')
            fetchImages(FOOD_API_URL)
        }
    }, [catImages, dogImages, foodImages]);

    const handleCatOption = () => {
        setCatImages(true)
        setDogImages(false)
        setFoodImages(false)
    }

    const handleDogOption = () => {
        console.log('dog handle')
        setCatImages(false)
        setDogImages(true)
        setFoodImages(false)
    }

    const handleFoodOption = () => {
        setCatImages(false)
        setDogImages(false)
        setFoodImages(true)
    }

    const fetchImages = async (API_URL) => {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) throw Error('Error: Data not Received');

            const result = await response.json();
            setImages(result);
        } catch (err) {
            setNotGettingError(true);
        }
    };

    return (
        <div className="container mt-5 mb-auto main">
            <div className="change-api">
                <ul className='list-unstyled d-flex flex-wrap justify-content-between'>
                    <a href="#" onClick={handleCatOption}>
                        <li className='text-center text-white rounded me-1'>Cats</li>
                    </a>
                    <a href="#" onClick={handleDogOption}>
                        <li className='text-center text-white rounded me-1'>Dogs</li>
                    </a>
                    <a href="#" onClick={handleFoodOption}>
                        <li className='text-center text-white rounded'>Foods</li>
                    </a>
                </ul>
            </div>
            {catImages &&
                <>
                    <h3 className='mb-3 mt-3'>Cats</h3><div className="card-container d-flex flex-wrap justify-content-between">
                        {!notGettingError ? (
                            images.length > 0 ? (
                                images.map((img) => (
                                    <img src={img.url} key={img.id} className='rounded' />
                                ))
                            ) : (
                                <p className='text-center'>Loading...</p>
                            )
                        ) : (
                            <p className='text-center'>Error: Data not Fetched {notGettingError}</p>
                        )}
                    </div>
                </>}
            {dogImages &&
                <>
                    <h3 className='mb-3 mt-3'>Dogs</h3><div className="card-container d-flex flex-wrap justify-content-between">
                        {!notGettingError ? (
                            images.length > 0 ? (
                                images.map((img) => (
                                    <img src={img.url} key={img.id} className='rounded' />
                                ))
                            ) : (
                                <p className='text-center'>Loading...</p>
                            )
                        ) : (
                            <p className='text-center'>Error: Data not Fetched {notGettingError}</p>
                        )}
                    </div>
                </>}
            {foodImages &&
                <>
                    <h3 className='mb-3 mt-3'>Foods</h3><div className="card-container d-flex flex-wrap justify-content-between">
                        {!notGettingError ? (
                            images.length > 0 ? (
                                images.map((img) => (
                                    <img src={img.url} key={img.id} className='rounded' />
                                ))
                            ) : (
                                <p className='text-center'>Loading...</p>
                            )
                        ) : (
                            <p className='text-center'>Error: Data not Fetched {notGettingError}</p>
                        )}
                    </div>
                </>}
        </div>
    );
};

export { Main };
