import products from '../data/products.json'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage() {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setSelectedColor(product.colors[0])
    setSelectedSize(product.sizes[0])
    setOpen(true)
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer bg-white rounded-lg"
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.title}
                  src={product.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 relative">
                <div className='h-12 w-full flex items-center justify-center'>
                  <h3 className="text-sm font-medium text-black-700 text-center">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </h3>
                </div>
                <p className="text-sm text-xl text-white flex justify-center bg-red-600 rounded-b-md">{product.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
          <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <img src={selectedProduct.image} alt={selectedProduct.title} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 sm:pr-12">{selectedProduct.title}</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{selectedProduct.description}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-2xl text-red-500 font-medium">{selectedProduct.price}</p>
                        <div className="mt-6">
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    selectedProduct.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0',
                                  )}
                                />
                              ))}
                            </div>
                            <p className="sr-only">{selectedProduct.rating} out of 5 stars</p>
                            <Link to="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {selectedProduct.reviewCount} reviews
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="mt-10">
                        <h4 className="text-sm font-medium text-gray-900">Color</h4>
                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-4 flex items-center space-x-3"
                        >
                          {selectedProduct.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={classNames(
                                color.selectedClass,
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  'h-8 w-8 rounded-full border border-black border-opacity-10',
                                )}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="mt-10">
                        <h4 className="text-sm font-medium text-gray-900">Size</h4>
                        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4 grid grid-cols-4 gap-4">
                          {selectedProduct.sizes.map((size) => (
                            <Radio key={size.name} value={size} disabled={!size.inStock} className={classNames(
                              size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none',
                            )}>
                              <span>{size.name}</span>
                              {size.inStock ? (
                                <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-focus:border-indigo-500" aria-hidden="true"></span>
                              ) : (
                                <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200" aria-hidden="true">
                                  <svg className="absolute inset-0 w-full h-full stroke-2 text-gray-200" stroke="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </Radio>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setOpen(false)}>
                    Add to bag
                  </button>
                  <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm" onClick={() => setOpen(false)}>
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  )
}
