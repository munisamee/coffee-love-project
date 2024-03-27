function App() {
    return (
      <div className="App">
        <Navbar />
  
        <Routes>
          <Route path='/' element={<HomePageWithNavigate />} />
          <Route path='/addtocart' element={<AddToCartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/product' element={<ProductPage />} product={productData} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
  export default App;