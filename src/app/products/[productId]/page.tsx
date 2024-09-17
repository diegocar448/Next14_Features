import notFound from "../[productId]/reviews/not-found"

interface InfoParams{
    params:{
        productId: string
    }
}

export default function Info({ params }: InfoParams){

    if (parseInt(params.productId) > 100) {
        return notFound()       
    }

    return (
        <div>
            <p>Informações do produto {params.productId}</p>          
        </div>
    )
}