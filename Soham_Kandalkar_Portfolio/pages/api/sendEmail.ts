import { NextApiRequest, NextApiResponse } from 'next';
import emailjs from 'emailjs-com';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { senderEmail, senderMessage } = req.body;

        if (!senderEmail || !senderMessage) {
            return res.status(400).json({ error: 'Invalid input' });
        }

        try {
            const serviceId = 'service_3gnpro5';  // Replace with your actual service ID
            const templateId = 'template_sr83z6b';  // Replace with your actual template ID
            const publicKey = 'HKgcmM-_Rz62BdG7x';  // Replace with your actual public key

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_email: senderEmail,
                    message: senderMessage,
                },
                publicKey
            );

            return res.status(200).json({ success: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error); // Log detailed error information
            return res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
};

export default sendEmail;
