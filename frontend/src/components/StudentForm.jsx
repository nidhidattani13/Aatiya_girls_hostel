import React, { useState } from 'react';
import { FileText, Download, User, Phone, MapPin, Calendar, Users, GraduationCap, Printer } from 'lucide-react';

const HostelAdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    motherName: '',
    fatherName: '',
    mobile1: '',
    mobile2: '',
    village: '',
    post: '',
    policeStation: '',
    district: '',
    pinCode: '',
    dob: '',
    allowedPerson1: '',
    allowedPerson2: '',
    allowedPerson3: '',
    allowedPerson4: '',
    coaching1Name: '',
    coaching1Address: '',
    coaching2Name: '',
    coaching2Address: '',
    coaching3Name: '',
    coaching3Address: '',
    coaching4Name: '',
    coaching4Address: '',
    studentPhoto: null,
    parentPhoto: null,
    studentSignature: '',
    parentSignature: '',
    admissionDate: new Date().toISOString().split('T')[0]
  });

  const [showPreview, setShowPreview] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #dbeafe 100%)',
      padding: '2rem 1rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '1.5rem'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '1rem auto',
      width: '100%'
    },
    card: {
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      padding: '1.25rem',
      marginBottom: '1rem'
    },
    header: {
      textAlign: 'center'
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#db2777',
      marginBottom: '0.5rem'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#ec4899',
      marginBottom: '0.5rem'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4b5563',
      marginBottom: '0.5rem'
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#9333ea',
      marginTop: '1rem'
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#9333ea',
      marginBottom: '1rem',
      borderBottom: '2px solid #e9d5ff',
      paddingBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center'
    },
    gridTwo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1rem',
      marginBottom: '1.25rem'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '2px solid #fbcfe8',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s',
      boxSizing: 'border-box'
    },
    fileInput: {
      width: '100%',
      padding: '0.5rem',
      border: '2px solid #fbcfe8',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      boxSizing: 'border-box'
    },
    photoPreview: {
      width: '128px',
      height: '128px',
      objectFit: 'cover',
      borderRadius: '0.5rem',
      marginTop: '0.5rem'
    },
    coachingCard: {
      marginBottom: '1.5rem',
      padding: '1rem',
      background: '#fce7f3',
      borderRadius: '0.5rem'
    },
    coachingTitle: {
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.75rem'
    },
    button: {
      background: 'linear-gradient(135deg, #ec4899 0%, #9333ea 100%)',
      color: 'white',
      padding: '1rem 3rem',
      borderRadius: '0.75rem',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s'
    },
    buttonCenter: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1.25rem'
    },
    rulesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      fontSize: '0.875rem'
    },
    ruleItem: {
      marginBottom: '0.5rem'
    },
    // Print Preview Styles
    printContainer: {
      maxWidth: '900px',
      margin: '0 auto',
      background: 'white',
      padding: '2rem'
    },
    printHeader: {
      textAlign: 'center',
      borderBottom: '4px solid #db2777',
      paddingBottom: '1rem',
      marginBottom: '1.5rem'
    },
    printH1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#db2777',
      margin: '0 0 0.5rem 0'
    },
    printH2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ec4899',
      margin: '0 0 0.5rem 0'
    },
    printSubtitle: {
      fontSize: '1.125rem',
      color: '#374151',
      margin: '0'
    },
    printFormTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#9333ea',
      marginTop: '1rem',
      marginBottom: '0.5rem'
    },
    printDate: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginTop: '0.5rem'
    },
    photoSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      marginBottom: '1.5rem'
    },
    photoBox: {
      textAlign: 'center'
    },
    photoLabel: {
      fontWeight: '600',
      marginBottom: '0.5rem',
      display: 'block'
    },
    photoFrame: {
      border: '2px solid #d1d5db',
      height: '160px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    photoImg: {
      maxHeight: '100%',
      maxWidth: '100%',
      objectFit: 'contain'
    },
    printSectionTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      background: '#f3e8ff',
      padding: '0.5rem',
      marginBottom: '0.75rem'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      fontSize: '0.875rem',
      marginBottom: '1.5rem'
    },
    infoLabel: {
      fontWeight: '600'
    },
    signatureSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      marginTop: '2rem',
      marginBottom: '1.5rem'
    },
    signatureBox: {
      textAlign: 'center'
    },
    signatureLine: {
      borderTop: '2px solid #9ca3af',
      paddingTop: '0.5rem',
      marginTop: '4rem'
    },
    signatureName: {
      fontWeight: '600',
      marginBottom: '0.25rem'
    },
    signatureLabel: {
      fontSize: '0.875rem'
    },
    rulesSection: {
      borderTop: '4px solid #9333ea',
      paddingTop: '1rem'
    },
    rulesTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '0.75rem'
    },
    rulesGridPrint: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.5rem 1rem',
      fontSize: '0.75rem'
    },
    backButton: {
      background: '#4b5563',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      marginTop: '2rem'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          [name]: event.target.result
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const generatePDF = () => {
    setShowPreview(true);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save to backend (which will store to Firestore / Storage)
    try {
      const res = await fetch('http://localhost:4000/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const json = await res.json();
      if (json.success) {
        alert('Form saved. ID: ' + json.id);
        // show print preview after saving
        generatePDF();
      } else {
        alert('Save failed: ' + (json.error || 'unknown error'));
      }
    } catch (err) {
      console.error('Save error', err);
      alert('Error saving form: ' + err.message);
    }
  };

  if (showPreview) {
    return (
      <div className="print-content">
        <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-content, .print-content * {
              visibility: visible;
            }
            .print-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .no-print {
              display: none !important;
            }
          }
        `}</style>
        
        <div style={styles.printContainer}>
          {/* Header */}
          <div style={styles.printHeader}>
            <h1 style={styles.printH1}>आतिया गर्ल्स हॉस्टल</h1>
            <p style={styles.printFormTitle}>नामांकन फॉर्म / ADMISSION FORM</p>
            <p style={styles.printDate}>दिनांक / Date: {formData.admissionDate}</p>
          </div>

          {/* Photos Section */}
          <div style={styles.photoSection}>
            <div style={styles.photoBox}>
              <span style={styles.photoLabel}>पिता/माता का फोटो / Parent Photo</span>
              <div style={styles.photoFrame}>
                {formData.parentPhoto ? (
                  <img src={formData.parentPhoto} alt="Parent" style={styles.photoImg} />
                ) : (
                  <User size={64} color="#9ca3af" />
                )}
              </div>
            </div>
            <div style={styles.photoBox}>
              <span style={styles.photoLabel}>छात्रा का फोटो / Student Photo</span>
              <div style={styles.photoFrame}>
                {formData.studentPhoto ? (
                  <img src={formData.studentPhoto} alt="Student" style={styles.photoImg} />
                ) : (
                  <User size={64} color="#9ca3af" />
                )}
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h3 style={styles.printSectionTitle}>व्यक्तिगत जानकारी / Personal Information</h3>
            <div style={styles.infoGrid}>
              <div><span style={styles.infoLabel}>छात्रा का नाम / Student Name:</span> {formData.studentName}</div>
              <div><span style={styles.infoLabel}>माता का नाम / Mother's Name:</span> {formData.motherName}</div>
              <div><span style={styles.infoLabel}>पिता का नाम / Father's Name:</span> {formData.fatherName}</div>
              <div><span style={styles.infoLabel}>जन्म तिथि / Date of Birth:</span> {formData.dob}</div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 style={styles.printSectionTitle}>संपर्क जानकारी / Contact Information</h3>
            <div style={styles.infoGrid}>
              <div><span style={styles.infoLabel}>मोबाइल नं (1) / Mobile No. (1):</span> {formData.mobile1}</div>
              <div><span style={styles.infoLabel}>मोबाइल नं (2) / Mobile No. (2):</span> {formData.mobile2 || 'N/A'}</div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 style={styles.printSectionTitle}>स्थायी पता / Permanent Address</h3>
            <div style={styles.infoGrid}>
              <div><span style={styles.infoLabel}>ग्राम / Village:</span> {formData.village}</div>
              <div><span style={styles.infoLabel}>पोस्ट / Post:</span> {formData.post}</div>
              <div><span style={styles.infoLabel}>थाना / Police Station:</span> {formData.policeStation}</div>
              <div><span style={styles.infoLabel}>जिला / District:</span> {formData.district}</div>
              <div><span style={styles.infoLabel}>पिन कोड / PIN Code:</span> {formData.pinCode}</div>
            </div>
          </div>

          {/* Allowed Visitors */}
          <div>
            <h3 style={styles.printSectionTitle}>छात्रा से मिलने वाले का नाम / Allowed Visitors</h3>
            <div style={styles.infoGrid}>
              {[1, 2, 3, 4].map((num) => (
                formData[`allowedPerson${num}`] && (
                  <div key={num}>
                    <span style={styles.infoLabel}>व्यक्ति {num} / Person {num}:</span> {formData[`allowedPerson${num}`]}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Coaching Details */}
          <div>
            <h3 style={styles.printSectionTitle}>कोचिंग विवरण / Coaching Details</h3>
            <div style={{fontSize: '0.875rem'}}>
              {[1, 2, 3, 4].map((num) => (
                (formData[`coaching${num}Name`] || formData[`coaching${num}Address`]) && (
                  <div key={num} style={{borderBottom: '1px solid #e5e7eb', paddingBottom: '0.5rem', marginBottom: '0.5rem'}}>
                    <span style={styles.infoLabel}>कोचिंग {num}:</span>
                    <div style={{marginLeft: '1rem'}}>
                      {formData[`coaching${num}Name`] && <div>नाम / Name: {formData[`coaching${num}Name`]}</div>}
                      {formData[`coaching${num}Address`] && <div>पता / Address: {formData[`coaching${num}Address`]}</div>}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Signatures */}
          <div style={styles.signatureSection}>
            <div style={styles.signatureBox}>
              <div style={styles.signatureLine}>
                <p style={styles.signatureName}>{formData.studentSignature}</p>
                <p style={styles.signatureLabel}>छात्रा का हस्ताक्षर / Student Signature</p>
              </div>
            </div>
            <div style={styles.signatureBox}>
              <div style={styles.signatureLine}>
                <p style={styles.signatureName}>{formData.parentSignature}</p>
                <p style={styles.signatureLabel}>पिता/माता का हस्ताक्षर / Parent Signature</p>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div style={styles.rulesSection}>
            <h3 style={styles.rulesTitle}>हॉस्टल नियम / Hostel Rules</h3>
            <div style={styles.rulesGridPrint}>
              <div>✓ हॉस्टल से बाहर निकलने से पहले अनुमति लें</div>
              <div>✓ बाहर जाने के लिए अनुमति आवश्यक</div>
              <div>✓ कोचिंग के बाद 30 मिनट में लौटें</div>
              <div>✓ देर से आने पर माता-पिता को सूचित करें</div>
              <div>✓ हॉस्टल को साफ रखें</div>
              <div>✓ बाहर का खाना/पेय वर्जित</div>
              <div>✓ 9 बजे के बाद देर से आने पर ₹50 जुर्माना</div>
              <div>✓ मोबाइल निर्धारित समय पर ही</div>
              <div>✓ बिना अनुमति जाने पर हॉस्टल जिम्मेदार नहीं</div>
              <div>✓ नियमित रूप से फीस जमा करें</div>
              <div>✓ बाहरी लोगों को रुकने की अनुमति नहीं</div>
              <div>✓ छोड़ने से 1 माह पूर्व सूचना दें</div>
            </div>
          </div>

          {/* Back Button */}
          <div style={{textAlign: 'center'}} className="no-print">
            <button
              onClick={() => setShowPreview(false)}
              style={styles.backButton}
            >
              ← Back to Form / फॉर्म पर वापस जाएं
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-root" style={styles.container}>
      <style>{`
        .form-root .max-width { width: 100%; }
        .form-root .card { width: 100%; }
        .form-root .grid-two { }
        @media (max-width: 600px) {
          .form-root { padding: 1rem !important; }
          .form-root .card { padding: 1rem !important; border-radius: 0.75rem !important; }
          .form-root input, .form-root select, .form-root textarea { padding: 0.6rem !important; font-size: 0.95rem !important; }
          .form-root .photoPreview { width: 96px !important; height: 96px !important; }
          .form-root .grid-two { grid-template-columns: 1fr !important; }
          .form-root .sectionTitle { font-size: 1rem !important; }
          .form-root .h1 { font-size: 1.75rem !important; }
          .form-root .button { padding: 0.75rem 1.25rem !important; font-size: 1rem !important; }
        }
      `}</style>

      <div className="max-width" style={styles.maxWidth}>
        {/* Header */}
  <div className="card" style={styles.card}>
          <div style={styles.header}>
            <h1 style={styles.h1}>आतिया गर्ल्स हॉस्टल</h1>
            <h2 style={styles.h2}>ATIYA GIRLS HOSTEL</h2>
            <p style={styles.subtitle}>रामपाड़ा कटिहार / Rampada Katihar</p>
            <p style={styles.formTitle}>नामांकन फॉर्म / ADMISSION FORM</p>
          </div>
        </div>

        {/* Form */}
  <form onSubmit={handleSubmit} className="card" style={styles.card}>
          {/* Photo Upload Section */}
          <div className="grid-two" style={styles.gridTwo}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <User size={16} style={{display: 'inline', marginRight: '0.5rem'}} />
                पिता/माता का फोटो / Parent Photo
              </label>
              <input
                type="file"
                name="parentPhoto"
                accept="image/*"
                onChange={handleFileChange}
                style={styles.fileInput}
              />
              {formData.parentPhoto && (
                <img className="photoPreview" src={formData.parentPhoto} alt="Parent" style={styles.photoPreview} />
              )}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <User size={16} style={{display: 'inline', marginRight: '0.5rem'}} />
                छात्रा का फोटो / Student Photo
              </label>
              <input
                type="file"
                name="studentPhoto"
                accept="image/*"
                onChange={handleFileChange}
                style={styles.fileInput}
              />
              {formData.studentPhoto && (
                <img className="photoPreview" src={formData.studentPhoto} alt="Student" style={styles.photoPreview} />
              )}
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h3 style={styles.sectionTitle}>
              व्यक्तिगत जानकारी / Personal Information
            </h3>
            <div className="grid-two" style={styles.gridTwo}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  छात्रा का नाम / Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                  placeholder="Enter student name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  माता का नाम / Mother's Name *
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                  placeholder="Enter mother's name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  पिता का नाम / Father's Name *
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                  placeholder="Enter father's name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <Calendar size={16} style={{display: 'inline', marginRight: '0.5rem'}} />
                  जन्म तिथि / Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 style={styles.sectionTitle}>
              <Phone size={20} style={{display: 'inline', marginRight: '0.5rem'}} />
              संपर्क जानकारी / Contact Information
            </h3>
            <div className="grid-two" style={styles.gridTwo}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  मोबाइल नं (1) / Mobile No. (1) *
                </label>
                <input
                  type="tel"
                  name="mobile1"
                  value={formData.mobile1}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  style={styles.input}
                  placeholder="10-digit mobile number"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  मोबाइल नं (2) / Mobile No. (2)
                </label>
                <input
                  type="tel"
                  name="mobile2"
                  value={formData.mobile2}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  style={styles.input}
                  placeholder="10-digit mobile number (optional)"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 style={styles.sectionTitle}>
              <MapPin size={20} style={{display: 'inline', marginRight: '0.5rem'}} />
              स्थायी पता / Permanent Address
            </h3>
            <div className="grid-two" style={styles.gridTwo}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  ग्राम / Village *
                </label>
                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  पोस्ट / Post *
                </label>
                <input
                  type="text"
                  name="post"
                  value={formData.post}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  थाना / Police Station *
                </label>
                <input
                  type="text"
                  name="policeStation"
                  value={formData.policeStation}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  जिला / District *
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  पिन कोड / PIN Code *
                </label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{6}"
                  style={styles.input}
                  placeholder="6-digit PIN code"
                />
              </div>
            </div>
          </div>

          {/* Allowed Visitors */}
          <div>
            <h3 style={styles.sectionTitle}>
              <Users size={20} style={{display: 'inline', marginRight: '0.5rem'}} />
              छात्रा से मिलने वाले का नाम / Names of Persons Allowed to Meet
            </h3>
            <div className="grid-two" style={styles.gridTwo}>
              {[1, 2, 3, 4].map((num) => (
                <div key={num} style={styles.formGroup}>
                  <label style={styles.label}>
                    व्यक्ति {num} / Person {num}
                  </label>
                  <input
                    type="text"
                    name={`allowedPerson${num}`}
                    value={formData[`allowedPerson${num}`]}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Coaching Details */}
          <div>
            <h3 style={styles.sectionTitle}>
              <GraduationCap size={20} style={{display: 'inline', marginRight: '0.5rem'}} />
              कोचिंग विवरण / Coaching Details
            </h3>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} style={styles.coachingCard}>
                <p style={styles.coachingTitle}>कोचिंग {num} / Coaching {num}</p>
                <div style={styles.gridTwo}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      नाम एवं समय / Name & Time
                    </label>
                    <input
                      type="text"
                      name={`coaching${num}Name`}
                      value={formData[`coaching${num}Name`]}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      पता / Address
                    </label>
                    <input
                      type="text"
                      name={`coaching${num}Address`}
                      value={formData[`coaching${num}Address`]}
                      onChange={handleInputChange}
                      style={styles.input}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Signatures */}
          <div>
            <h3 style={styles.sectionTitle}>
              हस्ताक्षर / Signatures
            </h3>
            <div className="grid-two" style={styles.gridTwo}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  छात्रा का हस्ताक्षर / Student Signature *
                </label>
                <input
                  type="text"
                  name="studentSignature"
                  value={formData.studentSignature}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                  placeholder="Type name as signature"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  पिता/माता का हस्ताक्षर / Parent Signature *
                </label>
                <input
                  type="text"
                  name="parentSignature"
                  value={formData.parentSignature}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                  placeholder="Type name as signature"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={styles.buttonCenter}>
            <button
              type="submit"
              className="button"
              style={styles.button}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Printer size={24} />
              Generate PDF / पीडीएफ बनाएं
            </button>
          </div>
        </form>

{/* Rules - Page Break */}
          <div style={{pageBreakBefore: 'always', paddingTop: '2rem'}}>
            <div style={styles.rulesSection}>
              <h3 style={{...styles.rulesTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>शपथ पत्र</h3>
              
              <div style={{fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem', textAlign: 'justify'}}>
                <p style={{marginBottom: '1rem'}}>
                  मैं <u style={{display: 'inline-block', minWidth: '150px', textAlign: 'center'}}>{formData.parentSignature || ''}</u> अपनी पुत्री / बहन <u style={{display: 'inline-block', minWidth: '150px', textAlign: 'center'}}>{formData.studentName || ''}</u> ग्राम <u style={{display: 'inline-block', minWidth: '100px', textAlign: 'center'}}>{formData.village || ''}</u> पो॰<u style={{display: 'inline-block', minWidth: '80px', textAlign: 'center'}}>{formData.post || '_'}</u>
                </p>
                <p style={{marginBottom: '1rem'}}>
                  <u style={{display: 'inline-block', minWidth: '100px', textAlign: 'center'}}>{formData.policeStation || ''}</u> जिला <u style={{display: 'inline-block', minWidth: '100px', textAlign: 'center'}}>{formData.district || ''}</u> को आपना मर्ज़ी से आतिया गर्ल्स हॉस्टल में रख रहा हूँ। मैं और मेरी 
                  पुत्री / बहन यह <u style={{display: 'inline-block', minWidth: '60px', textAlign: 'center'}}>{formData.admissionDate || '_'}</u> षपथ लेते हैं कि हॉस्टल के निम्नलिखित नियमों का पालन करेंगे।
                </p>
              </div>

              <div style={{fontSize: '0.875rem', lineHeight: '1.8'}}>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>1.</strong> हॉस्टल से बाहर निकलने के पूर्व का आने के समय हॉस्टल इंचार्ज से अनुमति लेने अनिवार्य होगा।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>2.</strong> कोचिंग का समय प्राप्त होने के 30 मिनट पूर्व हॉस्टल से निकलना एवं कोचिंग के समाप्त होने पर 30 मिनट के अंदर हॉस्टल वापस आना अनिवार्य होगा।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>3.</strong> हॉस्टल के अन्दर साफाई का विधि। स्वयं रखना।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>4.</strong> हॉस्टल से निकलने के पूर्व पक्का एवं बर्त्ती को बंद करना अनिवार्य है नहीं करने पर 50 रुपया दंड लगेगा।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>5.</strong> हॉस्टल से निकलने के बाद मेरी पुत्री अगर भाग जाती हैं तो इसके लिये हॉस्टल जिम्मेदार नहीं होगा।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>6.</strong> हॉस्टल _____ प्रत्येक हर महीने के 01 तारिख से 05 तारिख तक जमा करना अनिवार्य हैं।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>7.</strong> अभिवावक से आग्रह है कि अपनी बच्ची से रविवार को ही मिले। मिलने वाले मे माता–पिता अपना भाई–बहन के अलावा कोई नहीं मिलना हैं।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>8.</strong> मिलने के पहले हॉस्टल इंचार्ज से अनुमति लेना अनिवार्य है। गुरु जी से आग्रह है कि हॉस्टल रक्षा में प्रवेश न करें। एवं मिलने का समय 30 मिनट से कम हो।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>9.</strong> खिड़कीयों पर खड़ा होना सख़्ती से मनाही हैं।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>10.</strong> कोई भी वस्तू खिड़की से बाहर न फेकें। कचड़ा पेटी का प्रयोग करें।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>11.</strong> पढ़ाई पर बिश। ध्यान रखें।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>12.</strong> कोई भी समस्या होने पर इसे की शिकायत हॉस्टल इंचार्ज को फोन दें।
                </div>
                <div style={{marginBottom: '0.75rem'}}>
                  <strong>13.</strong> जब भी हॉस्टल छोड़ना (खाली) करना हो तो एक माह पूर्व बताना अनिवार्य है नहीं तो दुस्त माह का _____ टुक देना होगा।
                </div>
              </div>

              <div style={{marginTop: '3rem', textAlign: 'center', fontSize: '1.125rem', fontWeight: 'bold'}}>
                धन्यवाद
              </div>

              <div style={{...styles.signatureSection, marginTop: '4rem'}}>
                <div style={styles.signatureBox}>
                  <div style={{borderTop: '2px solid #9ca3af', paddingTop: '0.5rem', minHeight: '60px'}}>
                    <p style={{...styles.signatureName, fontSize: '1rem'}}>{formData.parentSignature}</p>
                    <p style={styles.signatureLabel}>पिता / माता का हस्ताक्षर</p>
                  </div>
                </div>
                <div style={styles.signatureBox}>
                  <div style={{borderTop: '2px solid #9ca3af', paddingTop: '0.5rem', minHeight: '60px'}}>
                    <p style={{...styles.signatureName, fontSize: '1rem'}}>{formData.studentSignature}</p>
                    <p style={styles.signatureLabel}>छात्रा का हस्ताक्षर</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HostelAdmissionForm;