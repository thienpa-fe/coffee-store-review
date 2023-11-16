import ReactSwagger from '@/components/SwaggerApiDocs';
import { getApiDocs } from '@/lib/swagger';

const SwaggerApiDocumentPage = async () => {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
};

export default SwaggerApiDocumentPage;
