import React from 'react'
import Header from "../components/header";
import BusinessTypes from "../components/business_types";
import HeaderImage from "../components/header_image";
export function HomePage() {
  return(
      <>
          <HeaderImage/>
          <Header/>
          <BusinessTypes/>
      </>

  )
}
