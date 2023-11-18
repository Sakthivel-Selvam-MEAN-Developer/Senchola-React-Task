import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className='rounded'>
                <div className="container-fluid pt-2 pb-2 ps-5 pe-5 d-flex flex-column justify-content-between align-items-center">
                    <div className="footer-logo">
                        <h4>MCU</h4>
                    </div>
                    <div className="footer-details p-2 bg-warning rounded">
                        <p className='m-0'>Mobile : +91 9942063766</p>
                        <p className='m-0'>Mail : sakthiselvamcs@gmail.com</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export {Footer}