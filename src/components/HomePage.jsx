import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import { FiChevronsRight, FiBriefcase, FiRefreshCcw} from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";


const HomePage = () => {

    const [heading, setHeading] = useState("");

    useEffect(() => {
        const fetchedData = async () => {
            const response = await fetch("https://backend-brewex1.onrender.com/heading")
            const data = await response.json();
            setHeading(data[0].content)
        }
        fetchedData()
    },[])

  return (
    <div className='container mt-5'>
        <div className='mb-5'>
            <h1 className='display-4 fw-bold'>{heading}</h1>
            <p className='lead mt-3'>Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.</p>
            <Link to="/cms">
                <button className='btn btn-primary btn-lg mt-4'>Get started</button>
            </Link>
        </div>
        <div className='row g-5 justify-content-between'>
            <div className='col-md-4'>
                <div className='p-4 border rounded h-100 shadow-sm'>
                    <div className='mb-3 fs-2 text-warning'>
                        <FiChevronsRight/>
                    </div>
                    <h5 className='fw-bold'>Ready to Go Algos</h5>
                    <p>We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.</p>
                </div>
            </div>
            <div className='col-md-4'>   
                <div className='p-4 border rounded h-100 shadow-sm'>
                    <div className='mb-3 fs-2 text-warning'>
                        <FaCodepen/>
                    </div>
                    <h5 className='fw-bold'>Internal Capability</h5>
                    <p>We productize all our work, enhace them with the latest AI technology, and train your internal teams to leverage them.</p>
                </div>
            </div>
            <hr/>
            <div className='col-md-4'>
                <div className='p-4 border rounded h-100 shadow-sm'>
                    <div className='mb-3 fs-2 text-warning'>
                        <GoDatabase/>
                    </div>
                    <h1>Multi-source data</h1>
                    <p>Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.</p>
                </div>
            </div>
            <div className='col-md-4'>    
                <div className='p-4 border rounded h-100 shadow-sm'>
                    <div className='mb-3 fs-2 text-warning'>
                        <FiBriefcase/>
                    </div>
                    <h1>Stakeholder alignment</h1>
                    <p>No black boxes. Stakeholders understand the "how", "so what" and "now what", leading to clear decision-making trade offs.</p>
                </div>
            </div> 
            <div className='col-md-4'>   
                <div className='p-4 border rounded h-100 shadow-sm'>
                    <div className='mb-3 fs-2 text-warning'>
                        <FiRefreshCcw/>
                    </div>
                    <h1>Continuous engagement</h1>
                    <p>We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.</p>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default HomePage
