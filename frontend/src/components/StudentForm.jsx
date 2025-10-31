import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// import { db, storage } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function StudentForm() {
  const [form, setForm] = useState({
    class: "",
    session: "",
    studentName: "",
    motherName: "",
    fatherName: "",
    mobile1: "",
    mobile2: "",
    address: "",
    village: "",
    po: "",
    thana: "",
    district: "",
    pincode: "",
    dob: "",
    visitors: ["", "", "", ""],
    coaching: [
      { name: "", time: "", address: "" },
      { name: "", time: "", address: "" },
      { name: "", time: "", address: "" },
      { name: "", time: "", address: "" },
    ],
  });

  const [studentPhoto, setStudentPhoto] = useState(null);
  const [parentPhoto, setParentPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleVisitorChange = (i, value) => {
    const updated = [...form.visitors];
    updated[i] = value;
    setForm((f) => ({ ...f, visitors: updated }));
  };

  const handleCoachingChange = (i, field, value) => {
    const updated = [...form.coaching];
    updated[i][field] = value;
    setForm((f) => ({ ...f, coaching: updated }));
  };

  const uploadPhoto = async (photo, path) => {
    const photoRef = ref(storage, `${path}/${photo.name}`);
    await uploadBytes(photoRef, photo);
    return await getDownloadURL(photoRef);
  };

  const generatePDF = async (studentURL, parentURL) => {
    const doc = new jsPDF();

    // -------- PAGE 1: ENGLISH FORM --------
    doc.setFontSize(16);
    doc.text("AATIYA GIRLS HOSTEL", 70, 15);
    doc.setFontSize(12);
    doc.text(`Admission Form`, 90, 22);
    doc.text(`Class: ${form.class}`, 15, 30);
    doc.text(`Session: ${form.session}`, 150, 30);

    if (studentURL) {
      doc.addImage(studentURL, "JPEG", 150, 40, 40, 40);
      doc.text("Student Photo", 155, 85);
    }
    if (parentURL) {
      doc.addImage(parentURL, "JPEG", 15, 40, 40, 40);
      doc.text("Parent Photo", 18, 85);
    }

    let y = 100;
    doc.text(`Student Name: ${form.studentName}`, 15, y);
    doc.text(`Mother's Name: ${form.motherName}`, 15, (y += 7));
    doc.text(`Father's Name: ${form.fatherName}`, 15, (y += 7));
    doc.text(`Mobile No (1): ${form.mobile1}`, 15, (y += 7));
    doc.text(`Mobile No (2): ${form.mobile2}`, 15, (y += 7));
    doc.text(`Address: ${form.address}`, 15, (y += 7));
    doc.text(`Village: ${form.village}`, 15, (y += 7));
    doc.text(`P.O.: ${form.po}`, 15, (y += 7));
    doc.text(`Thana: ${form.thana}`, 15, (y += 7));
    doc.text(`District: ${form.district}`, 15, (y += 7));
    doc.text(`Pin Code: ${form.pincode}`, 15, (y += 7));
    doc.text(`Date of Birth: ${form.dob}`, 15, (y += 7));

    doc.text("Visitors Allowed:", 15, (y += 10));
    form.visitors.forEach((v, i) => {
      if (v) doc.text(`${i + 1}. ${v}`, 25, (y += 7));
    });

    doc.text("Coaching Details:", 15, (y += 10));
    form.coaching.forEach((c, i) => {
      if (c.name)
        doc.text(
          `${i + 1}. ${c.name} (${c.time}) - ${c.address}`,
          25,
          (y += 7)
        );
    });

    doc.text("Student Signature: ____________________", 15, (y += 15));

    // -------- PAGE 2: HINDI FORM --------
    doc.addPage();
    doc.setFontSize(16);
    doc.text("शपथ पत्र", 90, 15);
    doc.setFontSize(12);
    doc.text("आतिया गर्ल्स हॉस्टल, रामपाड़ा कटिहार", 60, 25);

    let startY = 40;
    doc.text(
      `मैं ${form.fatherName} ग्राम ${form.village}, पोस्ट ${form.po}, जिला ${form.district} का निवासी हूँ, अपनी पुत्री ${form.studentName} को आतिया गर्ल्स हॉस्टल में रख रहा/रही हूँ। मैं यह स्वीकार करता/करती हूँ कि हॉस्टल के नियमों का पालन करूंगा/करूंगी।`,
      15,
      startY,
      { maxWidth: 180 }
    );

    const rules = [
      "1. हॉस्टल से बाहर निकलने के पूर्व या आने के समय हॉस्टल इंचार्ज की अनुमति अनिवार्य होगी।",
      "2. कोचिंग के समय प्रस्थान होने से 30 मिनट पूर्व हॉस्टल से निकलना व समय पर वापस आना अनिवार्य होगा।",
      "3. हॉस्टल के अंदर सफाई एवं वस्त्रों की ध्यान रखना होगा।",
      "4. अनुमति के बिना बाहर जाने पर 50 रुपये जुर्माना देना होगा।",
      "5. हॉस्टल के बाहर मेरी पुत्री अगर कहीं जाती है तो उसकी जिम्मेदारी हॉस्टल की नहीं होगी।",
      "6. हॉस्टल शुल्क समय पर जमा करना अनिवार्य है।",
      "7. किसी समस्या की स्थिति में अभिभावक को सूचित करना होगा।",
      "8. हॉस्टल में प्रवेश या निकास के समय अनुशासन बनाए रखना आवश्यक है।",
      "9. बिना अनुमति किसी वस्तु का उपयोग नहीं करना होगा।",
      "10. इलेक्ट्रॉनिक उपकरणों का उपयोग सीमित होगा।",
      "11. साफ-सुथरा रहना अनिवार्य है।",
      "12. हॉस्टल के नियमों का पालन अनिवार्य है।",
      "13. हॉस्टल छोड़ने से एक माह पूर्व सूचना देना आवश्यक है।",
    ];

    autoTable(doc, {
      startY: 80,
      body: rules.map((r) => [r]),
      styles: { font: "helvetica", fontSize: 11, cellPadding: 3 },
      theme: "plain",
    });

    doc.text("पिता/माता का हस्ताक्षर: ___________________", 15, 270);
    doc.text("छात्रा का हस्ताक्षर: ___________________", 120, 270);

    doc.save(`${form.studentName}_AatiyaHostel_Form.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let studentURL = "";
      let parentURL = "";

      if (studentPhoto) studentURL = await uploadPhoto(studentPhoto, "students");
      if (parentPhoto) parentURL = await uploadPhoto(parentPhoto, "parents");

      await addDoc(collection(db, "students"), {
        ...form,
        studentPhoto: studentURL,
        parentPhoto: parentURL,
        createdAt: new Date(),
      });

      await generatePDF(studentURL, parentURL);
      alert("Form saved and downloaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Error saving form.");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-xl shadow-md mt-5">
      <h1 className="text-xl font-bold text-center text-pink-700 mb-4">
        AATIYA GIRLS HOSTEL - Admission Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="class"
            placeholder="Class"
            value={form.class}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="session"
            placeholder="Session"
            value={form.session}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={form.studentName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="motherName"
          placeholder="Mother Name"
          value={form.motherName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father Name"
          value={form.fatherName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            name="mobile1"
            placeholder="Mobile No (1)"
            value={form.mobile1}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="mobile2"
            placeholder="Mobile No (2)"
            value={form.mobile2}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <textarea
          name="address"
          placeholder="Permanent Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            name="village"
            placeholder="Village"
            value={form.village}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="po"
            placeholder="P.O."
            value={form.po}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="thana"
            placeholder="Thana"
            value={form.thana}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="district"
            placeholder="District"
            value={form.district}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <input
          type="number"
          name="pincode"
          placeholder="Pin Code"
          value={form.pincode}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <div>
          <label className="font-medium">Visitors Allowed:</label>
          {form.visitors.map((v, i) => (
            <input
              key={i}
              type="text"
              placeholder={`Visitor ${i + 1}`}
              value={v}
              onChange={(e) => handleVisitorChange(i, e.target.value)}
              className="border p-2 rounded w-full my-1"
            />
          ))}
        </div>

        <div>
          <label className="font-medium">Coaching Details:</label>
          {form.coaching.map((c, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 my-1">
              <input
                type="text"
                placeholder="Name"
                value={c.name}
                onChange={(e) => handleCoachingChange(i, "name", e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Time"
                value={c.time}
                onChange={(e) => handleCoachingChange(i, "time", e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Address"
                value={c.address}
                onChange={(e) =>
                  handleCoachingChange(i, "address", e.target.value)
                }
                className="border p-2 rounded"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label>Upload Student Photo</label>
            <input
              type="file"
              onChange={(e) => setStudentPhoto(e.target.files[0])}
              className="w-full"
            />
          </div>
          <div>
            <label>Upload Parent Photo</label>
            <input
              type="file"
              onChange={(e) => setParentPhoto(e.target.files[0])}
              className="w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-pink-600 text-white w-full py-2 rounded font-semibold"
        >
          Save & Download
        </button>
      </form>
    </div>
  );
}
