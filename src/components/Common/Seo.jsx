import { Helmet } from "react-helmet"
const Seo = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | EbookUK` : 'EbookUK'}</title>
            {description && (
                <meta name="description" content={description} />
            )}
        </Helmet>
    )
}

export default Seo
