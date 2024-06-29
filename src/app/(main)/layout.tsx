import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";
import { getRandomShape, shapeTypes } from "coolshapes-react";



export default function Layout({children}: {children: ReactNode}){
  const randomCoolshape = getRandomShape({onlyId: true}) as any;
  return(
    <main>
      <Header shape={randomCoolshape} />
      {children}
      <Footer/>
    </main>
  )
}