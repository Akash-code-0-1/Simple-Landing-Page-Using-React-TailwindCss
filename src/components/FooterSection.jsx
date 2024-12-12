import React from 'react';
import footerimg from '../images/footer-img.PNG'

const FooterSection = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row  items-center justify-between px-8 py-20 md:px-9 lg:px-18 mt-10">
            {/* Left Section */}
            <div className="space-y-5 md:w-3/4 px-1 md:px-8 lg:px-20">
                {/* First Offer */}
                <div className="bg-white rounded-lg shadow-lg flex items-center p-5 space-x-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/ad18/373b/7fab9091c482d1ca06cb23a991ead22c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KVqPp4cW71~HKxi5Z7Oe7jBGGGxkQRfBbRgEeKj8bVulZl5K1Ej0cQlsarLORrd-Hxfil1RsFSLI3-IX7F963jEI6PNnFNffY49~9HAQobasXAXrC505P40N7AdKc2jks1ctTBjmXBkYhoOt~qGKLKC35DlaC5OIzGa~Arxig58EXskAih-FE0Iw0eHLQMh8Cs5Qiu7zpALLYmqAzkpwfwjTBahk-F4tokkN2CcSegbqem0zuyL3Su1hzXSjGjkXlogc4th~XfMtK~ivZoE8CrSlpvTXeXMPKHheBARgO4D~p-djIMUudIvT7oS4ATZE8MtpUt9l8suKrWO7s5t-Vw__"
                        alt="Find the Perfect Fit"
                        className="h-13 w-13"
                    />
                    <div>
                        <h3 className="text-xl font-bold">Find the Perfect Fit</h3>
                        <p className="text-gray-600 text-m">
                            Everybody is different, which is why we offer styles for every body.
                        </p>
                    </div>
                </div>
                {/* Second Offer */}
                <div className="bg-white rounded-lg shadow-lg flex items-center p-5 space-x-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/49b3/36d1/0835942240b30c0f4eb20a946642b152?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fM1-erdutJ6pWral~NW~2cBm~icXY5Pq2rNZ6V-wdDZZCkhupLJjZr3RM~u8FL3W39EkZFAEy65bfoKYVkCZiNGoGiwCfKOJCz5YQUHlmz3RzA9HEJioM~mJcRWFeQLmK2BlwIDpOEvG838KhxWUDW1zCbyA-oA5uFU6v1T-UnAWc0HxX5jJbv1W3BKWLVtFlnEUffhFd4MSlOwr53mBnUW2L4uqsveWQg8zE9ACShbE~10RaEEfYnoceLQMu80ueG92HAup0l8ZyG5tFwMIvRfvKYV4T7EZAB9ikeSe4YRXmONmKKqnghVb64hAxm-kiFwvZRmmFiMxR7cTwxNfKw__"
                        alt="Free Exchanges"
                        className="h-13 w-13"
                    />
                    <div>
                        <h3 className="text-xl font-bold">Free Exchanges</h3>
                        <p className="text-gray-600 text-m">
                            One of the many reasons you can shop with peace of mind.
                        </p>
                    </div>
                </div>
                {/* Third Offer */}
                <div className="bg-white rounded-lg shadow-lg flex items-center p-5 space-x-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/bd56/91dc/4c0ba263f5a7f267400d3e3b411085f5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhxfqOBQloTv7pdj2lKZQNq6vbvYpPq3Emp~FJUDJh-NmAZPzLOANgilx15KwpL2lalP-SIv3eY2zS0FfXBdjECmuegsEKK3EQRrF~lNa3uMMXVYTrOVkSqSd0-Suj-2mJkMeQJlzFBl2gLkpI5upXqw1FxOicsOLmVw7VTJfkg1nSwpOcRKS4HsXLtiBwBDHBK7tCBeOXlJRvxvysqxA84NrHGv9~gCI4XsJk5hAw1Nln3X5orv-7pX3~kBLn7Z16xS~huC8mX1S42DkGj5oTl6YXmcRkWSiga~G~wGSW50u0MPv2yvzHYQ~nxQr~SX9NP2ymGfnG~4t5nHc0GNkw__"
                        alt="Contact Our Seller"
                        className="h-13 w-13"
                    />
                    <div >
                        <h3 className="text-xl font-bold">Contact Our Seller</h3>
                        <p className="text-gray-600 text-m">
                            They are here to help you. That's quite literally what we pay them
                            for.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-2/2 flex justify-center">
                <img
                    src={footerimg}
                    alt=""
                    className="mt-5 w-3/4"
                />
            </div>
        </div>

    )
}

export default FooterSection;
