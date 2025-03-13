import {Link} from 'react-router-dom';

function HomeSectionCard(product){

    return(
        <div className='cursor-pointer flex flex-col items-center color bg-white w-[15rem] mx-3 shadow-lg rounded-lg'>
            <Link to={`/product/${product.id}`}>
            <div className='h-[13rem] w-[10rem]'>
                <img className="object-cover object-top w-full h-full" src={product.image}></img>

            </div>
            </Link>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p>{product.des}</p>
                <div className="flex items-center space-x-2 p-3">
                    <p className="font-semibold">{product.price}</p>
                    <p className="line-through opacity-50">{product.main_price}</p>
                    <p className="text-green-600 font-bold">{product.discount}</p>
                </div>

            </div>

        </div>

        

    );

}

export default HomeSectionCard;