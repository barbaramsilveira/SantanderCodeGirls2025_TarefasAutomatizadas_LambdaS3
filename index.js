exports.handler = async (event) => {
  // O evento contém as informações do S3 que acionaram a função
  const record = event.Records[0];
  const bucketName = record.s3.bucket.name;
  const objectKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));
  const fileSize = record.s3.object.size;

  console.log(`Arquivo recebido no bucket: ${bucketName}`);
  console.log(`Nome do arquivo: ${objectKey}`);
  console.log(`Tamanho do arquivo: ${fileSize} bytes`);

  return {
    statusCode: 200,
    body: `Arquivo ${objectKey} recebido com sucesso no bucket ${bucketName}.`
  };
};
