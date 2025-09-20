import React from 'react'
import { Link } from "react-router-dom"
import ComparativeAnalysis from '../Pages/comparativeAnalysis'

const Footer = () => {
    return (
        <div className="px-16 py-10  pb-10 border-t border-gray-700 bg-[#0B0130] text-white">
            <div className="flex gap-20 text-sm flex-wrap">
                <div>
                    <h4 className="font-semibold mb-2">Our Research</h4>
                    <ul className="space-y-1">
                        <li>Research Index</li>
                        <li>Research Overview</li>
                        <li>Research Residency</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">API Platform</h4>
                    <ul className="space-y-1">
                        <li>Platform Overview</li>
                        <li>Pricing</li>
                        <li>API log in (opens in a new window)</li>
                        <li>Documentation (opens in a new window)</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Safety</h4>
                    <ul className="space-y-1">
                        <li>Safety Approach</li>
                        <li>Security & Privacy</li>
                        <li>Trust & Transparency</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer