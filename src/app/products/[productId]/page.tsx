interface InfoParams{
    params:{
        productId: number,
        reviewId: number
    }
}

export default function Info({ params }: InfoParams){
    return (
        <div>
            <p>Informações do produto {params.productId}</p>          
        </div>
    )
}