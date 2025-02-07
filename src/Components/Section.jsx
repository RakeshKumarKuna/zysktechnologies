import './Section.css'
export function Section(){
    return (<>
     <section >
        <div className="d-flex justify-content-center align-items-center">
        <div className="p-2 fw-medium custom-border">
           <span className="custom-border p-1 bg-white">New feature</span><span>Check out the team dashboard <span className='bi bi-arrow-right-short'></span></span>
        </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <span className='main-content'>Beautiful analytics to grow smarter</span>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='pe-5 ps-5 pt-1  text-center'>
        <p className='w-100'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        </div>
        <div className='button-box'>
            <div className='custom-button-one'><i class="bi bi-play-circle"></i> Demo</div>
            <div className='custom-button-two'><span>Sign up</span></div>
        </div>
        <div className='d-flex justify-content-center align-content-center flex-wrap width-100'>
            <img alt='image' src="Assets/image1.png" className='custom-img'></img>
        </div>
        <div className='mt-4'>
            <div className='social-text'><span>Join 4,000+ companies already growing</span></div>
            <div className='logo-box logo-box-mobile mt-4'>
                <div className='logo-box logo-box-mobile-first'>
                    <div><img src='Assets/Fictional company logo.png'></img></div>
                    <div><img src='Assets/Fictional company logo1.png'></img></div>
                    <div><img src='Assets/Fictional company logo2.png'></img></div>
                </div>
                <div className='logo-box logo-box-mobile-second'>
                    <div><img src='Assets/Fictional company logo3.png'></img></div>
                    <div><img src='Assets/Fictional company logo4.png'></img></div>
                    <div><img src='Assets/Fictional company logo5.png'></img></div>
                </div>
            </div>
        </div>
     </section>
     <hr className='mt-5'></hr>
     </>);
}