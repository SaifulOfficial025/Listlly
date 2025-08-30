import React from 'react';
import { Link } from 'react-router-dom';

function PropertyDetailsSuccess({ propertyData }) {
  const samplePhotos = [
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200'
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">5405 Avenida Maravillas</h1>
              <p className="text-gray-600">El Sereno, Santa Ana, CA 92647</p>
              <p className="text-sm text-gray-500">1 bd • 1 ba • 500 sqft</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">$87,995,000</div>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                ➕
              </button>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {samplePhotos.map((photo, index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={photo} 
                  alt={`Property photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="text-blue-600 hover:text-blue-700">
              See Photos →
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="p-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Edit Description →
            </button>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur. Nunc eam ut potenti molly sapien lobor nunc sit. Ut luctus at sagittis nec rhoncus lorem et hae. 
            Ultricies est turpis neque amet imperdiet mauris. Nec placerat elit fermentum velit mauris pretium vulputate. At potenti lorem mauris posuere 
            tempor gravida molestis. Ultricies est faucibus vehicula dapibus molestie ut et. Phasellus in consequat viverra mauris rutrum sit amet 
            pellentesque consectetur. Rhoncus sit consectetur pharetra maecenas imperdiet massa. Pellentesque vulputate...
          </p>

          <p className="text-gray-700 leading-relaxed">
            ut risus elementum sed interdum ac tellus molestie non. Ut vulputate lorem magna rutrum in hendrerit mauris ultricies. Massa maecenas congue 
            velit dui ut condimentum ultricies erat velit mollis rutrum eleifend urna lorem. Volutpat rutrum elit mauris molestie lorem sit. 
            Convallis fusce est hendrerit maecenas et mauris aliquet diam. Leo molestie lorem cursus ultricies mauris cursus consequat. Sit mauris mauris 
            rutrum ac est consectetur. Mauris consequat.
          </p>
        </div>

        {/* Property Details */}
        <div className="p-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Property Details</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Edit Details →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-3">Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span>For Sale</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">County</span>
                  <span>New York</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Neighborhood</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Listing Agent</span>
                  <span>Featured Deal</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">No. of Stories</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Stories</span>
                  <span>2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">City</span>
                  <span>Lot Size</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Basement</span>
                  <span>Lot Size (Sq Ft)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">MLS Status</span>
                  <span>Now on Market</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">MLS Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">MLS Number</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">MLS Source</span>
                  <span>Bright MLS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">MLS Greed</span>
                  <span>-</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Features */}
        <div className="p-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Property Features</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Edit Features →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-3">Flooring</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Flooring Features</span>
                  <span>Ceramic Tile</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carpet, Wall, Luxury Vinyl</span>
                  <span>-</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Window Features</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Heating</span>
                  <span>-</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Laundry Features</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Electric</span>
                  <span>-</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional sections could be added here */}

        {/* Bottom Action */}
        <div className="p-6 border-t text-center">
            <Link to="/dashboard/selling_properties">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
            Best Choice
          </button> </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsSuccess;
