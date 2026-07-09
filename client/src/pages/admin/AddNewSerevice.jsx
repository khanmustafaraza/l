import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { FileText, Building2, Globe, IndianRupee, Plus, X } from "lucide-react";
import Button from "../../components/common/Button";

const AddNewService = () => {
  const [documents, setDocuments] = useState([]);
  const [document, setDocument] = useState("");

  const addDocument = () => {
    if (document.trim()) {
      setDocuments([...documents, document]);
      setDocument("");
    }
  };

  const removeDocument = (index) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  return (
    <AdminLayout>
      <div className="p-1">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Add Government Service
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Create a new service available on LokSetu platform
          </p>
        </div>

        {/* Form Card */}
        <div
          className="
          bg-white
          rounded
          shadow-sm
          border
          border-gray-100
          p-6 md:p-8
        "
        >
          <form className="space-y-6">
            {/* Service Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service Name
              </label>

              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5" />

                <input
                  type="text"
                  placeholder="Example: Birth Certificate"
                  className="
                    w-full
                    pl-11
                    pr-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    text-sm
                    outline-none
                    focus:bg-white
                    focus:border-yellow-400
                    focus:ring-2
                    focus:ring-yellow-100
                  "
                />
              </div>
            </div>

            {/* Department + Category */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>

                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5" />

                  <input
                    type="text"
                    placeholder="Health Department"
                    className="
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      text-sm
                      outline-none
                      focus:bg-white
                      focus:border-yellow-400
                    "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>

                <select
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    text-sm
                    outline-none
                    focus:bg-white
                    focus:border-yellow-400
                  "
                >
                  <option>Select Category</option>
                  <option>Certificate</option>
                  <option>Education</option>
                  <option>Health</option>
                  <option>Pension</option>
                  <option>Employment</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>

              <textarea
                rows="4"
                placeholder="Enter service description..."
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  resize-none
                  text-sm
                  outline-none
                  focus:bg-white
                  focus:border-yellow-400
                "
              />
            </div>

            {/* Eligibility */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Eligibility
              </label>

              <textarea
                rows="3"
                placeholder="Who can apply for this service?"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  resize-none
                  text-sm
                  outline-none
                  focus:bg-white
                  focus:border-yellow-400
                "
              />
            </div>

            {/* Documents */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Required Documents
              </label>

              <div className="flex gap-3">
                <input
                  value={document}
                  onChange={(e) => setDocument(e.target.value)}
                  placeholder="Aadhar Card"
                  className="
                    flex-1
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    text-sm
                    outline-none
                    focus:border-yellow-400
                  "
                />

                <button
                  type="button"
                  onClick={addDocument}
                  className="
                    px-5
                    rounded-xl
                    bg-yellow-400
                    hover:bg-yellow-500
                    transition
                  "
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-2
                      bg-gray-100
                      px-3
                      py-2
                      rounded-lg
                      text-sm
                    "
                  >
                    {doc}

                    <X
                      size={15}
                      className="cursor-pointer text-gray-500 hover:text-red-500"
                      onClick={() => removeDocument(index)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Website + Charge */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Official Website
                </label>

                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5" />

                  <input
                    type="url"
                    placeholder="https://example.gov.in"
                    className="
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                    "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Charge
                </label>

                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5" />

                  <input
                    type="number"
                    placeholder="0"
                    className="
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                    "
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>

              <select
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                "
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Submit */}
            <Button name="Add New Service" />
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddNewService;
