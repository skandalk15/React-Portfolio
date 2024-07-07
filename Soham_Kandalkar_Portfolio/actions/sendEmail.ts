import emailjs from 'emailjs-com';

const validateString = (value: unknown) => {
    if (!value || typeof(value) !== 'string'){
        return false;
    }
    return true;
};

const getErrorMessage = (error: unknown): string => {
    let message: string;
    if (error instanceof Error){
        message = error.message; 
    } else if (error && typeof(error) === 'object' && 'message' in error) {
        message = (error as { message: string }).message;
    } else if (typeof(error) === 'string'){
        message = error;
    } else {
        message = "An unknown error occurred";
    }
    return message;
}

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('senderMessage');
    const senderEmail = formData.get('senderEmail');

    if (!validateString(senderEmail)){
        return {
            error: "Invalid email"
        };
    }

    if (!validateString(message)){
        return {
            error: "Invalid message"
        };
    }

    try {
        const serviceId = 'service_3gnpro5';  // Replace with your actual service ID
        const templateId = 'template_sr83z6b';  // Replace with your actual template ID
        const publicKey = 'HKgcmM-_Rz62BdG7x';  // Replace with your actual public key

        await emailjs.send(
            serviceId,
            templateId,
            {
                from_email: senderEmail as string,
                message: message as string,
            },
            publicKey
        );

        return {
            success: "Email sent successfully"
        };
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }
}
