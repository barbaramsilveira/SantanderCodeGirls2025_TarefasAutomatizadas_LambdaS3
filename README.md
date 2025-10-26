# Laboratório — Executando Tarefas Automatizadas com Lambda Function e S3

Este repositório foi criado como parte do desafio proposto na DIO e tem como objetivo aplicar de forma prática os conceitos relacionados à automação de tarefas utilizando **AWS Lambda** e **Amazon S3**.  
A proposta é demonstrar como funções Lambda podem ser acionadas automaticamente a partir de eventos do S3, permitindo a execução de fluxos de trabalho sem necessidade de servidores dedicados.

Durante a atividade, foi feita uma simulação de um processo automatizado em que **o upload de arquivos em um bucket S3 dispara a execução de uma função Lambda**. Essa função pode processar dados, mover arquivos, registrar informações em bancos de dados ou acionar outros serviços da AWS. Essa arquitetura possibilita a criação de soluções escaláveis, de baixo custo e totalmente gerenciadas.

---

## Como foi feito

1. Criei um bucket no Amazon S3 para armazenar os arquivos de entrada.  
2. Desenvolvi uma função Lambda para ser executada automaticamente sempre que um novo arquivo fosse enviado ao bucket.  
3. Configurei a notificação de eventos no S3 para acionar a função Lambda.  
4. Testei o fluxo completo fazendo upload de arquivos e verificando a execução da função.  
5. Documentei as etapas e insights adquiridos neste repositório.

---

## Exemplo de Evento de Trigger no S3 (JSON)

```json
{
  "Records": [
    {
      "eventVersion": "2.1",
      "eventSource": "aws:s3",
      "awsRegion": "us-east-1",
      "eventTime": "2023-10-26T12:00:00.000Z",
      "eventName": "ObjectCreated:Put",
      "s3": {
        "bucket": {
          "name": "meu-bucket-exemplo"
        },
        "object": {
          "key": "arquivo-exemplo.txt",
          "size": 1234
        }
      }
    }
  ]
}

````
## Como configurar no AWS Lambda

1. No console da AWS, acesse **AWS Lambda**.  
2. Clique em **Create function**.  
3. Escolha **Author from scratch** e defina:
   - Runtime: Node.js 18.x (ou versão mais recente disponível)  
   - Nome da função (ex.: `ProcessaUploadS3`)
4. Após criada, cole o código da função no editor.  
5. Clique em **Deploy**.

---

## Vinculando a Lambda ao S3

1. Acesse **Amazon S3** e selecione seu bucket.  
2. Vá em **Properties** → **Event notifications** → **Create event notification**.  
3. Configure para acionar em `All object create events`.  
4. Escolha sua função Lambda como destino.  
5. Salve.

---

## Testando

1. Faça upload de um arquivo no bucket S3.  
2. Vá até a aba **Monitor** da função Lambda.  
3. Clique em **View logs in CloudWatch**.  
4. Verifique as informações do arquivo no log.
