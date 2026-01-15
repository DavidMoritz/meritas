import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, Upload, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ContactPageHero from '@/components/_templates/contact-page-hero/ContactPageHero.tsx';
import { sendContactEmail } from '@/functions/send-contact-email';
import { Main } from '@/components/main/Main.tsx';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

const SERVICES = [
  {
    id: 'clarity',
    title: 'Clarity & Structure (Strategy)',
    description:
      'Aligning strategy, sequencing, and investment for maximum impact with minimal waste.',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Application Development',
    description:
      'Modernizing infrastructure or creating custom solutions from scratch.',
  },
  {
    id: 'design',
    title: 'Digital Experience Design',
    description:
      'Intuitive, accessible, and scalable UX across web, mobile, and platform experiences.',
  },
  {
    id: 'data',
    title: 'Data & AI Solutions',
    description:
      'Maximizing data value through warehousing, analytics, and business intelligence.',
  },
  {
    id: 'staffing',
    title: 'Staff Augmentation',
    description:
      "Specialized, vetted talent who integrate seamlessly to expand your team's capabilities.",
  },
];

interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber?: string;
  services: string[];
  projectDetails: string;
  file?: FileList;
}

function RouteComponent() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    defaultValues: {
      services: [],
    },
  });

  const toggleService = (serviceId: string) => {
    const newServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(s => s !== serviceId)
      : [...selectedServices, serviceId];

    setSelectedServices(newServices);
    setValue('services', newServices);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF, PPT, or DOCX files are accepted');
        return;
      }
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    // Validate at least one service is selected
    if (selectedServices.length === 0) {
      alert('Please select at least one service area.');
      return;
    }

    try {
      // Convert file to base64 if present
      let attachment;
      if (uploadedFile) {
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result as string;
            // Remove data URL prefix (e.g., "data:application/pdf;base64,")
            const base64Content = result.split(',')[1];
            resolve(base64Content);
          };
          reader.onerror = reject;
          reader.readAsDataURL(uploadedFile);
        });

        attachment = {
          filename: uploadedFile.name,
          content: base64,
          type: uploadedFile.type,
        };
      }

      // Send email via Resend with attachment
      await sendContactEmail({ data: { ...data, attachment } });
      setSubmitSuccess(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert(
        'Failed to send your inquiry. Please try again or contact us directly.'
      );
    }
  };

  return (
    <Main>
      <ContactPageHero />

      <section className="bg-black px-6 pb-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="border-white/10 border-t pt-10" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
            {/* Left Column - Why Work With Us */}
            <div className="space-y-8">
              {/* Why Work With Us - Sticky on desktop only */}
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8 lg:sticky lg:top-8"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h3 className="mb-6 font-bold text-white text-xl">
                  Why Work With Us?
                </h3>
                <div className="space-y-4">
                  {[
                    'Senior-only team with decades of experience',
                    'Transparent, human-centered project management',
                    'Best-in-class engineering and DevOps practices',
                    'Seamless integration with your existing team',
                    'Proven track record delivering serious results',
                    'Scalable, accessible solutions built for growth',
                    'Invested partnership — we treat your business like our own',
                  ].map((benefit, index) => (
                    <motion.div
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      key={benefit}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    >
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#ec4a4a]">
                        <CheckCircle2
                          className="h-3 w-3 text-[#ec4a4a]"
                          strokeWidth={3}
                        />
                      </div>
                      <p className="font-medium text-sm text-white/80 leading-5">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-8">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                  {/* Full Name */}
                  <div className="space-y-3">
                    <label
                      className="block font-bold text-sm text-white"
                      htmlFor="fullName"
                    >
                      Full Name <span className="text-[#ec4a4a]">*</span>
                    </label>
                    <motion.input
                      className={`w-full border bg-white/10 ${
                        errors.fullName ? 'border-red-500' : 'border-white/20'
                      } rounded-lg px-4 py-3.5 text-base text-white transition-all placeholder:text-white/30 focus:border-white/40 focus:bg-white/15 focus:outline-none`}
                      id="fullName"
                      placeholder="Full Name"
                      transition={{ duration: 0.2 }}
                      type="text"
                      whileFocus={{ scale: 1.005 }}
                      {...register('fullName', {
                        required: 'Full name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
                      })}
                    />
                    {errors.fullName && (
                      <motion.p
                        animate={{ opacity: 1, y: 0 }}
                        className="font-medium text-red-400 text-sm"
                        initial={{ opacity: 0, y: -5 }}
                      >
                        {errors.fullName.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label
                      className="block font-bold text-sm text-white"
                      htmlFor="email"
                    >
                      Email Address <span className="text-[#ec4a4a]">*</span>
                    </label>
                    <motion.input
                      className={`w-full border bg-white/10 ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      } rounded-lg px-4 py-3.5 text-base text-white transition-all placeholder:text-white/30 focus:border-white/40 focus:bg-white/15 focus:outline-none`}
                      id="email"
                      placeholder="email@company.com"
                      transition={{ duration: 0.2 }}
                      type="email"
                      whileFocus={{ scale: 1.005 }}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <motion.p
                        animate={{ opacity: 1, y: 0 }}
                        className="font-medium text-red-400 text-sm"
                        initial={{ opacity: 0, y: -5 }}
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-3">
                    <label
                      className="block font-bold text-sm text-white"
                      htmlFor="companyName"
                    >
                      Company Name <span className="text-[#ec4a4a]">*</span>
                    </label>
                    <motion.input
                      className={`w-full border bg-white/10 ${
                        errors.companyName
                          ? 'border-red-500'
                          : 'border-white/20'
                      } rounded-lg px-4 py-3.5 text-base text-white transition-all placeholder:text-white/30 focus:border-white/40 focus:bg-white/15 focus:outline-none`}
                      id="companyName"
                      placeholder="Company Name"
                      transition={{ duration: 0.2 }}
                      type="text"
                      whileFocus={{ scale: 1.005 }}
                      {...register('companyName', {
                        required: 'Company name is required',
                      })}
                    />
                    {errors.companyName && (
                      <motion.p
                        animate={{ opacity: 1, y: 0 }}
                        className="font-medium text-red-400 text-sm"
                        initial={{ opacity: 0, y: -5 }}
                      >
                        {errors.companyName.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone Number (Optional) */}
                  <div className="space-y-3">
                    <label
                      className="block font-bold text-sm text-white"
                      htmlFor="phoneNumber"
                    >
                      Phone Number{' '}
                      <span className="text-white/40">(optional)</span>
                    </label>
                    <motion.input
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-base text-white transition-all placeholder:text-white/30 focus:border-white/40 focus:bg-white/15 focus:outline-none"
                      id="phoneNumber"
                      placeholder="+1 (555) 000-0000"
                      transition={{ duration: 0.2 }}
                      type="tel"
                      whileFocus={{ scale: 1.005 }}
                      {...register('phoneNumber')}
                    />
                  </div>

                  <div className="border-white/10 border-t pt-8" />

                  {/* Services Selection */}
                  <div>
                    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="mb-2 font-bold text-white text-xl md:mb-0">
                        What type of help are you looking for?
                      </h3>
                      <p className="text-sm text-white/40">
                        <span className="text-[#ec4a4a]">*</span> (Select all
                        that apply)
                      </p>
                    </div>

                    <div className="space-y-4">
                      {SERVICES.map((service, index) => (
                        <motion.div
                          animate={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -20 }}
                          key={service.id}
                          transition={{
                            duration: 0.4,
                            delay: 1.1 + index * 0.1,
                          }}
                        >
                          <motion.button
                            className={`w-full border bg-white/5 ${
                              selectedServices.includes(service.id)
                                ? 'border-[#ec4a4a] bg-[#ec4a4a]/10'
                                : 'border-white/20'
                            } flex items-start gap-4 rounded-lg px-4.5 py-4.5 text-left transition-all hover:border-white/40 hover:bg-white/10`}
                            onClick={() => toggleService(service.id)}
                            transition={{ duration: 0.2 }}
                            type="button"
                            whileHover={{ scale: 1.005, x: 2 }}
                            whileTap={{ scale: 0.995 }}
                          >
                            {/* Custom Checkbox */}
                            <motion.div
                              animate={{
                                backgroundColor: selectedServices.includes(
                                  service.id
                                )
                                  ? '#ec4a4a'
                                  : 'rgba(255,255,255,0.1)',
                                borderColor: selectedServices.includes(
                                  service.id
                                )
                                  ? '#ec4a4a'
                                  : 'rgba(255,255,255,0.2)',
                              }}
                              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2"
                              initial={false}
                              transition={{ duration: 0.2 }}
                            >
                              {selectedServices.includes(service.id) && (
                                <motion.div
                                  animate={{ scale: 1 }}
                                  initial={{ scale: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <CheckCircle2
                                    className="h-4 w-4 text-white"
                                    strokeWidth={3}
                                  />
                                </motion.div>
                              )}
                            </motion.div>

                            {/* Service Content */}
                            <div className="flex-1">
                              <h4 className="mb-1 font-bold text-base text-white leading-6">
                                {service.title}
                              </h4>
                              <p className="text-sm text-white/60 leading-5">
                                {service.description}
                              </p>
                            </div>
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>

                    {errors.services && (
                      <motion.p
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 font-['Geist:Medium'] text-red-400 text-sm"
                        initial={{ opacity: 0, y: -5 }}
                      >
                        Please select at least one service
                      </motion.p>
                    )}
                    <p className="mt-3 text-white/40 text-xs">
                      Please select at least one service area.
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3">
                    <label
                      className="block font-bold text-sm text-white"
                      htmlFor="projectDetails"
                    >
                      Tell us more about your project goals and challenges{' '}
                      <span className="text-[#ec4a4a]">*</span>
                    </label>
                    <motion.textarea
                      className={`w-full border bg-white/10 ${
                        errors.projectDetails
                          ? 'border-red-500'
                          : 'border-white/20'
                      } resize-none rounded-lg px-4 py-3.5 text-base text-white leading-6 transition-all placeholder:text-white/30 focus:border-white/40 focus:bg-white/15 focus:outline-none`}
                      id="projectDetails"
                      placeholder="(e.g. We need to replatform a legacy system and integrate new BI tools…)"
                      rows={6}
                      transition={{ duration: 0.2 }}
                      whileFocus={{ scale: 1.005 }}
                      {...register('projectDetails', {
                        required: 'Please provide project details',
                        minLength: {
                          value: 20,
                          message: 'Please provide at least 20 characters',
                        },
                      })}
                    />
                    {errors.projectDetails && (
                      <motion.p
                        animate={{ opacity: 1, y: 0 }}
                        className="font-medium text-red-400 text-sm"
                        initial={{ opacity: 0, y: -5 }}
                      >
                        {errors.projectDetails.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="border-white/10 border-t pt-8" />

                  {/* File Upload */}
                  <div>
                    <label className="mb-3 block font-bold text-sm text-white">
                      Attach Supporting Documents{' '}
                      <span className="text-white/40">(optional)</span>
                    </label>

                    <div className="relative">
                      <input
                        accept=".pdf,.ppt,.pptx,.doc,.docx"
                        className="hidden"
                        id="fileUpload"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        type="file"
                      />
                      <motion.label
                        className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-white/20 border-dashed bg-white/5 px-4 py-8 transition-all hover:bg-white/10"
                        htmlFor="fileUpload"
                        whileHover={{
                          scale: 1.005,
                          borderColor: 'rgba(255,255,255,0.4)',
                        }}
                        whileTap={{ scale: 0.995 }}
                      >
                        {uploadedFile ? (
                          <div className="flex w-full items-center gap-4">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            <div className="flex-1">
                              <p className="font-medium text-base text-white">
                                {uploadedFile.name}
                              </p>
                              <p className="text-white/50 text-xs">
                                {(uploadedFile.size / 1024 / 1024).toFixed(2)}{' '}
                                MB
                              </p>
                            </div>
                            <motion.button
                              className="rounded-full p-2 transition-colors hover:bg-white/10"
                              onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeFile();
                              }}
                              type="button"
                              whileHover={{ scale: 1.1, rotate: 90 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <X className="h-4 w-4 text-white" />
                            </motion.button>
                          </div>
                        ) : (
                          <div className="w-full text-center">
                            <Upload className="mx-auto mb-2 h-6 w-6 text-white/30" />
                            <p className="mx-auto max-w-md text-white/40 text-xs leading-4">
                              Max 10MB. PDF, PPT/PPTX, or DOC/DOCX accepted. Include
                              project briefs, RFPs, or relevant documentation.
                            </p>
                          </div>
                        )}
                      </motion.label>
                    </div>
                  </div>

                  <div className="border-white/10 border-t pt-8" />

                  {/* Privacy Notice */}
                  <p className="text-white/40 text-xs leading-4">
                    By submitting, you agree to our privacy policy. All
                    inquiries are treated as confidential.
                  </p>

                  {/* Submit Button */}
                  <motion.button
                    className={`w-full ${
                      submitSuccess
                        ? 'bg-green-600'
                        : 'bg-red-600 hover:bg-red-700'
                    } flex items-center justify-center gap-3 rounded-lg px-8 py-4.5 font-bold text-base text-white transition-all disabled:cursor-not-allowed disabled:opacity-70`}
                    disabled={isSubmitting || submitSuccess}
                    type="submit"
                    whileHover={
                      isSubmitting || submitSuccess
                        ? {}
                        : {
                            scale: 1.02,
                            boxShadow: '0 10px 40px rgba(220, 38, 38, 0.3)',
                          }
                    }
                    whileTap={
                      isSubmitting || submitSuccess ? {} : { scale: 0.98 }
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'linear',
                          }}
                        />
                        Sending...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Inquiry Sent Successfully!
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <motion.div
                          className="relative"
                          transition={{ duration: 0.2 }}
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* What Happens Next */}
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-sm text-white/70 leading-5">
                  <span className="font-bold text-white">
                    What happens next?
                  </span>{' '}
                  After you submit your inquiry, a member of our team will
                  review your project details and reach out within 24 hours to
                  schedule an initial consultation. We'll discuss your needs,
                  timeline, and how we can help bring your project to life.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
}
