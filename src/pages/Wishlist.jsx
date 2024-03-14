import React from 'react'
import Header from '../Components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../REDUX/Slices/wishlistSlice'
import { addToCart } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Wishlist() {
  const cart =useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state. wishlistReducer)

  const handleCart = (product)=>{
    const exisitingProduct = cart?.find(item=>item.id==product.id)
    if(exisitingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      toast.info("products added to your cart!!!")
    }else{
          dispatch(addToCart(product))
          dispatch(removeWishlistItem(product.id))
          // alert("product added to your cart")
    }
  }



  return (
    <>

      <Header />
      

      {wishlist?.length>0?
        <Row>

       {
        wishlist?.map(product=>(
          <Col style={{marginTop:'150px'}} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem' }}>
            <Card.Img style={{ height: '180px' }} variant="top" src={product?.thumbnail} />
            <Card.Body>
              <Card.Title >{product?.title.slice(0,16)}</Card.Title>
              <div className="d-flex justify-content-between">
                <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'><i className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                <button onClick={()=>handleCart(product)} className='btn'><i className="fa-solid fa-cart-plus text-success"></i></button>

              </div>
            </Card.Body>
          </Card>

        </Col>
        ))
        
        }

      </Row>
    :
<div className='container' style={{ marginTop: '100px' }}>
        
        <div className="w-100 d-flex justify-content-center align-items-center flex-column" style={{ height: '70vh' }}>
          <img className='img-fluid' style={{ width: '400px' }} src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="" />
          <h3>Your Wish list is Empty !!!!</h3>
        </div>
      </div>
    }
          <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

    </>

  )
}

export default Wishlist