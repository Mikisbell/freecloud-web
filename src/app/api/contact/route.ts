import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { name, email, message } = contactFormSchema.parse(json);

    // Aquí es donde integrarías tu servicio de email (SendGrid, Nodemailer, etc.)
    // Por ahora, solo simulamos el envío.
    console.log('Formulario de contacto recibido:');
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Simular un retraso de red
    await new Promise(resolve => setTimeout(resolve, 1000));

    // En un entorno real, enviarías el email y manejarías errores.
    // if (errorSendingEmail) {
    //   return NextResponse.json({ message: 'Error al enviar el mensaje.' }, { status: 500 });
    // }

    return NextResponse.json({ message: 'Mensaje enviado con éxito. ¡Gracias!' }, { status: 200 });

  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json({ message: 'Datos inválidos o error interno.' }, { status: 400 });
  }
}
