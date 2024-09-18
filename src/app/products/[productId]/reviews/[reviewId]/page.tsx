
import NotFound from "./not-found"

interface ReviewsParams{
    params:{
        productId: number,
        reviewId: string
    }
}

export default function Review({ params }: ReviewsParams){    
    if (parseInt(params.reviewId) > 1000) {
        return NotFound()
    }

    if (parseInt(params.reviewId) === 900) {
        throw Error('Invalid 900 Id.');        
    }

    return (
        <div>
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewId}</p>
        </div>
    )
}