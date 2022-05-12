import sanityClient from '@sanity/client';

export default sanityClient({
   projectId: 'ki0121kd',
   dataset: 'production',
   apiVersion: '2022-05-02', //dagen prosjektet ble først opprettet/sist oppdatert
   useCdn: true //false for localhost, true for netlify
});