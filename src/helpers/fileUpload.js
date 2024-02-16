
export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No existe ningún archivo para cargar');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dlg14tht8/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'piano-app');
    formData.append('file', file);

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        console.log(resp);
        if ( !resp.ok ) throw new Error('No se pudo cargar archivo');

        const cloudResp = await resp.json();
        console.log({ cloudResp });

        return cloudResp.secure_url;


    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    };
};