import Header from '../../components/header/Header'
import Section1 from '../../components/section1/Section1'
import Section2 from '../../components/section2/Section2'
import SectionAvis from '../../components/sectionAvis/SectionAvis'
import SlideLogo from '../../components/slideLogo/SlideLogo'
import './home.css'

export default function Home(){


    return(

        <>
            <Header/>
            <div className='homeContainer'>
            <Section1/>
            <Section2/>
            <SlideLogo/>
            <SectionAvis/>
            </div>

        
        </>
    )
}