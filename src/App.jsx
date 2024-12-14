import productImageMobile from '../public/images/image-product-mobile.jpg';
import productImageDesktop from '../public/images/image-product-desktop.jpg';
import { useWindowSize } from "@uidotdev/usehooks"

function App() {

  const size = useWindowSize();

  return (
    <>
      <main className=" text-color-3 rounded-lg overflow-hidden bg-color-4 max-w-[350px] md:max-w-[600px] transition-all duration-700">
            <div className='flex flex-col md:flex-row'>
              {size.width >= 769 ? (<img src={productImageDesktop} className='object-cover w-1/2 h-full' alt='productImage'/>) : (<img src={productImageMobile} alt='productImage'/>)}
              <div className='w-full md:w-1/2 h-full p-7'>
                <div className='flex flex-col gap-2 md:gap-6 mb-2 md:mb-6'>
                  <p className='tracking-[2px] md:tracking-[5px] md:text-[16px]'>PERFUME</p>
                  <h1 className='font-fraunces h1'>Gabrielle Essence Eau De Parfum</h1>
                  <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                </div>
                <div className='flex items-center gap-8 mb-2 md:mb-6'>
                  <p className='font-fraunces h1 text-color-1'>$149.99</p>
                  <p className='text-[16px] line-through'>$169.99</p>
                </div>
                <button className='w-full font-bold bg-color-1 hover:bg-color-5 text-color-4  flex items-center justify-center py-3 rounded-lg gap-3 transition-colors duration-300 group'>
                <svg  width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#fff"/></svg>
                Add to Cart
                </button>
            </div>
            </div>
            
      </main>
    </>
  )
}

export default App
