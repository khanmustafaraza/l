import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import {
  FileText,
  Folder,
  Building2,
  IndianRupee,
  Plus,
  FileCheck,
  AlignLeft,
} from "lucide-react";

const GovtSerRegister = () => {
  const [documents, setDocuments] = useState([""]);

  const addDocument = () => {
    setDocuments([...documents, ""]);
  };

  const handleDocumentChange = (index, value) => {
    const updated = [...documents];
    updated[index] = value;
    setDocuments(updated);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Add Government Service
          </h1>

          <form className="space-y-6">
            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Service Name
                </label>

                <div className="relative mt-2">
                  <FileText
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />

                  <input
                    className={inputClass}
                    placeholder="Income Certificate"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>

                <div className="relative mt-2">
                  <Folder
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />

                  <select className={inputClass}>
                    <option>Select Category</option>

                    <option>Certificate</option>

                    <option>Identity</option>

                    <option>Pension</option>

                    <option>Transport</option>

                    <option>Health</option>
                  </select>
                </div>
              </div>

              {/* Department */}

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Government Department
                </label>

                <div className="relative mt-2">
                  <Building2
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />

                  <input
                    className={inputClass}
                    placeholder="Revenue Department"
                  />
                </div>
              </div>

              {/* Fee */}

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Service Fee
                </label>

                <div className="relative mt-2">
                  <IndianRupee
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />

                  <input
                    type="number"
                    className={inputClass}
                    placeholder="100"
                  />
                </div>
              </div>
            </div>

            {/* Description */}

            <div>
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>

              <div className="relative mt-2">
                <AlignLeft
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />

                <textarea
                  rows="4"
                  className={inputClass}
                  placeholder="Describe service..."
                />
              </div>
            </div>

            {/* Documents */}

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  Required Documents
                </label>

                <button
                  type="button"
                  onClick={addDocument}
                  className="flex items-center gap-1 text-blue-600 text-sm"
                >
                  <Plus size={16} />
                  Add Document
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="relative">
                    <FileCheck
                      className="absolute left-3 top-3 text-gray-400"
                      size={18}
                    />

                    <input
                      value={doc}
                      onChange={(e) =>
                        handleDocumentChange(index, e.target.value)
                      }
                      placeholder="Aadhaar Card"
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-blue-600"
              />

              <span className="text-sm text-gray-700">Service Active</span>
            </div>

            <button
              className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-lg
              font-medium
              transition
              "
            >
              Save Government Service
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default GovtSerRegister;
