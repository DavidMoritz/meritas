import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

interface ContactFormData {
	fullName: string;
	email: string;
	companyName: string;
	phoneNumber?: string;
	services: string[];
	projectDetails: string;
	attachment?: {
		filename: string;
		content: string; // base64 encoded
		type: string;
	};
}

// TODO: SECURITY - Replace this hardcoded key with env variable before production
const RESEND_API_KEY = "re_jbXD6kwR_KM3ZtAgzHnG6zSVyxgRwwFTg";

export const sendContactEmail = createServerFn({ method: "POST" })
	.inputValidator((data: ContactFormData) => data)
	.handler(async ({ data }) => {
		const resend = new Resend(RESEND_API_KEY);

		try {
			const emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.companyName}</p>
        ${data.phoneNumber ? `<p><strong>Phone:</strong> ${data.phoneNumber}</p>` : ""}

        <h3>Services Interested In:</h3>
        <ul>
          ${data.services.map((service) => `<li>${service}</li>`).join("")}
        </ul>

        <h3>Project Details:</h3>
        <p>${data.projectDetails.replace(/\n/g, "<br>")}</p>
      `;

			const emailOptions: any = {
				from: "Meritas Contact Form <onboarding@resend.dev>",
				to: "david@meritasdigital.com",
				subject: `New Contact Form Submission from ${data.fullName}`,
				html: emailContent,
				replyTo: data.email,
			};

			// Add attachment if provided
			if (data.attachment) {
				emailOptions.attachments = [
					{
						filename: data.attachment.filename,
						content: data.attachment.content,
					},
				];
			}

			const result = await resend.emails.send(emailOptions);

			if (result.error) {
				throw new Error(result.error.message);
			}

			return { success: true, id: result.data?.id };
		} catch (error) {
			console.error("Failed to send email:", error);
			throw new Error("Failed to send email");
		}
	});
