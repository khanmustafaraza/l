import React from "react";

const ProfileList = () => {
  const profile = {
    name: "Rahul Sharma",
    fatherName: "Mohan Sharma",
    motherName: "Sunita Sharma",
    gender: "Male",
    dob: "15 August 1995",
    mobile: "9876543210",
    email: "rahul@gmail.com",
    aadhaar: "XXXX XXXX 1234",
    pan: "ABCDE1234F",
    occupation: "Private Employee",
    income: "₹3,00,000",
    maritalStatus: "Married",
  };

  const address = {
    house: "House No. 25",
    village: "Rampur",
    post: "Rampur Post Office",
    tehsil: "Dehradun",
    district: "Dehradun",
    state: "Uttarakhand",
    pin: "248001",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Profile</h1>

            <p className="mt-1 text-gray-500">
              Your personal information used for government services.
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Profile Completion */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow">
        <div className="flex justify-between">
          <h2 className="font-semibold">Profile Completion</h2>

          <span className="font-bold text-blue-600">85%</span>
        </div>

        <div className="mt-3 h-3 w-full rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-blue-600"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-5 text-xl font-semibold">Personal Information</h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Info label="Name" value={profile.name} />

          <Info label="Father's Name" value={profile.fatherName} />

          <Info label="Mother's Name" value={profile.motherName} />

          <Info label="Gender" value={profile.gender} />

          <Info label="Date of Birth" value={profile.dob} />

          <Info label="Mobile Number" value={profile.mobile} />

          <Info label="Email" value={profile.email} />

          <Info label="Aadhaar Number" value={profile.aadhaar} />

          <Info label="PAN Number" value={profile.pan} />

          <Info label="Occupation" value={profile.occupation} />

          <Info label="Annual Income" value={profile.income} />

          <Info label="Marital Status" value={profile.maritalStatus} />
        </div>
      </div>

      {/* Address */}
      <div className="mt-6 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-5 text-xl font-semibold">Address Information</h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Info label="House No." value={address.house} />

          <Info label="Village" value={address.village} />

          <Info label="Post Office" value={address.post} />

          <Info label="Tehsil" value={address.tehsil} />

          <Info label="District" value={address.district} />

          <Info label="State" value={address.state} />

          <Info label="PIN Code" value={address.pin} />
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>

      <p className="mt-1 font-medium text-gray-900">{value}</p>
    </div>
  );
};

export default ProfileList;
