import './HeaderSection.css';
export function HeaderSection() {
    return (<div>
        <header>
            <div className="container-fluid p-4  box">
                <div className="d-flex custom-margin" >
                    <div><img src="Assets/logo.png" height={32} width={81.61}></img></div>
                    <div className='mobile-exclude'><button className="btn btn-light">Home</button></div>
                    <div className='mobile-exclude'>
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Prodcut1</a></li>
                                <li><a class="dropdown-item" href="#">Prodcut2</a></li>
                                <li><a class="dropdown-item" href="#">Prodcut3</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mobile-exclude'>
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Resources1</a></li>
                                <li><a class="dropdown-item" href="#">Resources2</a></li>
                                <li><a class="dropdown-item" href="#">Resources3</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mobile-exclude'><button className="btn btn-light">Pricing</button></div>
                </div>
                <div className="">
                    <div className='mobile-exclude ms-5'><img src='Assets/Avatar.png'></img></div>
                    <div className='sidebar'>
                        <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-justify"></i></button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Menu</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <div ><button className="btn btn-light">Home</button></div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div><button className="btn btn-light">Pricing</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className=''></hr>
        </header>
    </div>)
}