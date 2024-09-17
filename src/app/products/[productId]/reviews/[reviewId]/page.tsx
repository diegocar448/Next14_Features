
import NotFound from "./not-found"

interface ReviewsParams{
    params:{
        productId: number,
        reviewId: number
    }
}

export default function Review({ params }: ReviewsParams){    
    if (parseInt(params.reviewId) > 1000) {
        return NotFound()
    }

    return (
        <div>
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewId}</p>
        </div>
    )
}