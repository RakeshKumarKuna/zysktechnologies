import './Blog.css';

export function Blog() {
    return (<div>
        <div>
            <div className='m-4 clearfix'>
                <div className='float-start'>
                    <div><span style={{ color: '#E63F3A', fontWeight: '600', fontSize: '16px', fontWeight: 'bold' }}>Our blog</span></div>
                    <div className='mt-2'><span style={{ color: '#101828', fontWeight: '600', fontSize: '36px' }}>Lastest blog posts</span></div>
                    <div className='mt-2'><span style={{ color: '#475467', fontWeight: '400', fontSize: '20px' }}>Tool and strategies modern teams need to help their companies grow.</span></div>
                </div>
                <div className='float-end custom-button'><button className='btn btn-danger rounded-2'>View all posts</button></div>
            </div>
            <div className='blog-box mb-4'>
                <div className='me-3 mb-3'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="Assets/imagebanner1.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <div className='clearfix'>
                                <div className='float-start'>
                                    <div className='text-danger fw-bold'>Design</div>
                                    <div><span style={{ color: '#101828', fontWeight: '600', fontSize: '24px' }}>UX review</span></div>
                                    <div><span style={{ color: '#475467', fontWeight: '400', fontSize: '16px' }}>Create compelling presentations that wow your colleagues and impress your managers?</span></div>
                                </div>
                            </div>
                            <div className='float-start d-flex mt-2'>
                                <img src='Assets/Avatar.png'></img>
                                <div >
                                    <span className='ms-2 fw-bold'>Oliva Rhye</span><br></br>
                                    <span className='ms-2'>20 Jan 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='me-3 mb-3'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="Assets/imagebanner2.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <div className='clearfix'>
                                <div className='float-start'>
                                    <div className='text-danger fw-bold'>Product</div>
                                    <div><span style={{ color: '#101828', fontWeight: '600', fontSize: '24px' }}>Migrating to Linear 101</span></div>
                                    <div><span style={{ color: '#475467', fontWeight: '400', fontSize: '16px' }}>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</span></div>
                                </div>
                            </div>
                            <div className='float-start d-flex mt-2'>
                                <img src='Assets/Avatar.png'></img>
                                <div >
                                    <span className='ms-2 fw-bold'>Phoenix Baker</span><br></br>
                                    <span className='ms-2'>19 Jan 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='me-3 mb-3'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="Assets/imagebanner3.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <div className='clearfix'>
                                <div className='float-start'>
                                    <div className='text-danger fw-bold'>Software Engineering</div>
                                    <div><span style={{ color: '#101828', fontWeight: '600', fontSize: '24px' }}>Building your API stack</span></div>
                                    <div><span style={{ color: '#475467', fontWeight: '400', fontSize: '16px' }}>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</span></div>
                                </div>
                            </div>
                            <div className='float-start d-flex mt-2'>
                                <img src='Assets/Avatar2.png'></img>
                                <div >
                                    <span className='ms-2 fw-bold'>Lana Steiner</span><br></br>
                                    <span className='ms-2'>18 Jan 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <div><span style={{color:'#101828',fontWeight:'600',fontSize:'36px'}}>Start your free trial</span></div>
                <div><span style={{color:'#475467',fontWeight:'400',fontSize:'20px'}}>Join over 4,000+ startups already growing with Untitled.</span></div>
                <div className='d-flex justify-content-center align-content-center mt-3 mb-5'>
                    <div><button className='btn btn-light'>Learn More</button></div>
                    <div><button className='btn btn-danger ms-3'>Get started</button></div>
                </div>
            </div>
        </div>
    </div>)
}