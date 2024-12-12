import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Products = () => {
    const products_1 = [
        {
            id: 1,
            name: 'Nike Shoe',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            price: 234,
            image: 'https://s3-alpha-sig.figma.com/img/eaca/5d20/c173565e359934604ef94379159ff4f4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YU44Rt3Ky591dF1z1UUfGsBHYYsm7l3FuO4Vuh~Qvq3qiRMRqcwZ5u85r5T3zSaI4Aab5gFJj5NRAufHB1XkBfdCluErbkK~wsU8CkQpsijncNODH4RNRl2XBaxr8AQwuKKpScOxVT0DQbUXJf0mqYMOPYGKjNt-sNXZgclKT01x11Xv1PJydEsz6BE0THOQdN-R-F8VeP9FcLQole24vTPjlarxj9shjz7Swv50gUXa2VAraonOA5ssh4a5d4BzeVNNYCH2Dynw35-Jr3lH3gzSVT1f-MoZYR-heqjHVTR2xeIT8mVd2xOj6M5ZaE1Tt6tjI4Kae-2VGPlKeiJtOg__',
        },
        {
            id: 2,
            name: 'Sneakers Skate Shoe',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            price: 234,
            image: 'https://s3-alpha-sig.figma.com/img/cb3a/b629/b9aafe35c2f39d97fb08bd991c0435ba?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qHoszH~ZeXdMv5X1J1tEAW1vMb1i9nUGTnfRifXuD~9mm8SHj0oJr8Kf9rh96K1df1eKXTtm64~g1skzSgpCGvms42vNCXwNGAPLzy35YbxhBo5I6wBw62GqhYJOXaUvflhqp2aJPtsSvvrTv7EzI4w7S-2wtMEgiAaoxcBPmKtAkv1gjXm0qNcYydxztOQhqfJRjXfTwlAY3tgL1Bp~95XD~IhW1nG2T7DeeyvGM20dkGgiyKF4-5ce-bCuS31Oz-Nc~2LLzRZ57cvUA7KsCXteXKHhFa~tGLTcb77Q4949WXLjtlE2skQDfSFIheic-xte~S7-FlalQ1chpjjdkg__',
        },
        {
            id: 3,
            name: 'Sneakers Basketball Shoe',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            price: 234,
            image: 'https://s3-alpha-sig.figma.com/img/b00d/dcf0/4f0213419d6df4a3226966d5d83e3f97?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4HzlKUWCDCmuNrVwF5EtUltu3w5-yiWIXZS9rfNXWZQradObbedlFTwg9UGF2D-gKfna-bPk8snS9n~z0lS6HkJVpjkEPSVkFS-U2ILPaKs5rb0XwUZQZkqxpcQ3nZMfXWqkmrQw26CzOGLXNnYWHrfKmYNbyWhf1c2Ja8VoVZmnLSqrwnckfNKRLFnlCV~PEGxsaP8Y1Z5BNw7Jyv8tD-2mB34u6szYDSV51l8h572qUafPx7WZQ3t7-7TX~vOdbjclVxm3GXCAibSJ~jHNqTagN7REtu~~TUU~HrOQG-KlKX~zOApmcnwHKmkEIbUr-E0fiYPN9GLbWt7aQwfOQ__',
        },
    ];

    const products_2 = [
        {
            id: 1,
            name: 'Prestige High-Cut Leather',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            price: 234,
            image: 'https://s3-alpha-sig.figma.com/img/4a4f/946a/16612e9e24ac75f48b6ec8e7d8d18936?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYjAPtc~GkmVOQaUi8-KvIHUCsiU17vQhdU5xMrVzXR03q7fzRh4mlJT945BxGH1Stkt1Zg85inZwcYQ59HRwY7s9Oz8p1tyuw2ByLJIct5E8QPmpeC5aEJcW3THDYpqSENYYzukcYJ5vR5T5H2koVFqgP9JmE-x5LqNo45mWrDCn3sLIKg7hqtJuy-kRMEDR9~WWUXG569dy1WPbeyx9luTupDP3Sn~R9iKt77mgWTrUN0uys~VHFd5MgJ96ctln~BnI0BOdJRPpdVmdj5EFhF3yFDLFWRsYeVrgRhHgjtQF9EnGYijl~FjGatzNKl6li18n0ZQ6IPHMqU~cRhz3g__',
        },
        {
            id: 2,
            name: 'Slip-On Formal Shoe',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            price: 234,
            image: 'https://s3-alpha-sig.figma.com/img/1ec3/9a43/f45d62f287232a5a3d244d7a05c22efe?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKHqvbWwA2C~PAP9nrKH5cgwXjo5ichNAQ38nHLbdctpnCOth~zNtH-rr-MS16JyPvUv16jOrmYww-GXqbuPyZGDDJGuayiT6jCcocmL9Ce9ZQvV94vplUxHtjQAvlCxLpLucV3OlkPjomaLqGOn1Uo~uP~QSs0VM-RCvIXhYFXRpjJ7LADb7mlbxipuLMgk4t~CM9SxFThRM5xlrwswWCHQBqHXUdvC9pLxQajOrxqRNdY~t3QSdYeUbFKD3aAzsd~o3IHI5ZZ-FDSr-pW9zDql95LMQYMbtuO3eGQ8UX7o-EF6FuPoWfs2wPeqjllgMRMZkfXGtwEllv-QY-N8Ow__',
        },
        {
            id: 3,
            name: 'Slip-On Formal Shoe',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            price: 234,
            image: 'https://s3-alpha-sig.figma.com/img/eead/7174/8869df345a2785e9357f2e49ee053fc5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A81DGcJM77qIlzirXgXQURcOLJNk9xf5Yd24tIRW1~dL1LYd45Mw~h1mf-6UjH6DAoHsUEZGuqceqxUKI~gVLKaDYp753113deoWE3f7lJ5fxx0cn1FdULXBZPmst6VZDZHV30LfhyNwiSV8FxIMbR00CjjPxI3vjJrifLqmw3l5Pn88AKHa3N1P5fgK7BtU-2ZHyYO8joUa37MUep1j0zBIxIf8wDewF~IvEStTW4Uvp1ySRHqy-RVepDj~uT-zsP1FGSKNn8GQv7vGmmrShiMA~D7exqO4dHb4QZjRHeBFtvXCbCKjtgcp~mApd8ucYbJOV-hyj3rNh5XxlMiSzg__',
        },
    ];

    return (
        <div className="bg-white px-8 md:px-9 lg:px-18">
            <div className="section-1 bg-white px-1 md:px-8 lg:px-20">
                <h1 className="font-bebas tracking-normal text-5xl font-semiboldd text-center md:text-left mb-10 mt-10">CASUAL SHOES</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products_1.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="bg-productimgbg h-58 w-58 p-7 object-cover rounded-xl mb-5"
                            />
                            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 text-m mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-orange-500 text-3xl font-bold">${product.price}</span>
                                <button className="mt-1 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-start">
                                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-2 bg-white px-1 md:px-8 lg:px-20">
                <h1 className="font-bebas tracking-normal text-5xl font-semi text-center md:text-left mb-10 mt-10">FORMAL SHOES</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products_2.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="bg-white h-58 w-58 p-7 object-cover rounded-xl mb-5"
                            />
                            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 text-m mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-orange-500 text-3xl font-bold">${product.price}</span>
                                <button className="mt-1 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-start">
                                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Products;
