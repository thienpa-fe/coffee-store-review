import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Coffee-Store-Review APIs',
        version: '1.0',
      },
      components: {
        // TODO: Enable security
        // securitySchemes: {
        //   BearerAuth: {
        //     type: 'http',
        //     scheme: 'bearer',
        //     bearerFormat: 'JWT',
        //   },
        // },
      },
      security: [],
    },
  });
  return spec;
};
