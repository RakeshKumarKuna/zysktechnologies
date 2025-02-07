import './Features.css'
export function Features() {
    return (<div>
        <div className='text-center'>
            <div><span className='features-text'>Features</span></div>
            <div><span className='second-text'>Analytics that feels like it’s from the future</span></div>
            <div className='f-flex justify-content-center align-content-center w-100'><p className='third-text  text-center'>Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.</p></div>
        </div>
        <div className='d-flex justify-content-center align-content-center me-3 ms-3'>
            <div >
                <div>
                    <div className='first-row'>
                        <div className='text-center'>
                            <div className='text-center'><i class="bi bi-chat-dots"></i></div>
                            <div><span className='head-text'>Share team inboxes</span></div>
                            <div><span className='content-text'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</span></div>
                        </div>
                        <div className='text-center'>
                            <div className='text-center'><i class="bi bi-lightning-charge"></i></div>
                            <div><span className='head-text'>Deliver instant answers</span></div>
                            <div><span className='content-text'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</span></div>
                        </div>
                        <div className='text-center'>
                            <div className='text-center'><i class="bi bi-box-arrow-up-right"></i></div>
                            <div><span className='head-text'>Manage your team with reports</span></div>
                            <div><span className='content-text'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='second-row'>
                        <div className='text-center'>
                            <div className='text-center'><i class="bi bi-emoji-smile"></i></div>
                            <div><span span className='head-text'>Connect with customers</span></div>
                            <div className='content-text'><span>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</span></div>
                        </div>
                        <div className='text-center'>
                            <div className='text-center'><i class="bi bi-command"></i></div>
                            <div><span span className='head-text'>Connect the tools you already use</span></div>
                            <div className='content-text'><span>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</span></div></div>
                        <div className='text-center'>
                            <div className='text-center'><i class="bi bi-chat-heart"></i></div>
                            <div><span span className='head-text'>Our people make the difference</span></div>
                            <div className='content-text'><span>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</span></div>
                            </div>
                         </div>
                </div>
            </div>
        </div>
    </div>)
}