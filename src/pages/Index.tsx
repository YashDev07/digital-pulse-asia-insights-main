import React, { useState, useEffect, useRef } from 'react';
import { ScrollySection } from '@/components/ScrollySection';
import { ChapterIntro } from '@/components/ChapterIntro';
import { StickyTextSection } from '@/components/StickyTextSection';
import { LineChart } from '@/components/LineChart';
import { BarChart } from '@/components/BarChart';
import { Quote } from '@/components/Quote';
import { SplitComparison } from '@/components/SplitComparison';
import { NavigationDots } from '@/components/NavigationDots';
import { ScrollProgress } from '@/components/ScrollProgress';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';

// Mock data for charts
const hiringTrendsData = {
  india: [
    { x: 1, y: 0 },
    { x: 2, y: -12 },
    { x: 3, y: -20 },
    { x: 4, y: -5 },
    { x: 5, y: 10 },
    { x: 6, y: 25 },
    { x: 7, y: 40 },
    { x: 8, y: 55 },
  ],
  us: [
    { x: 1, y: 0 },
    { x: 2, y: -8 },
    { x: 3, y: -15 },
    { x: 4, y: -3 },
    { x: 5, y: 5 },
    { x: 6, y: 15 },
    { x: 7, y: 22 },
    { x: 8, y: 30 },
  ],
  sea: [
    { x: 1, y: 0 },
    { x: 2, y: -10 },
    { x: 3, y: -18 },
    { x: 4, y: -7 },
    { x: 5, y: 8 },
    { x: 6, y: 20 },
    { x: 7, y: 32 },
    { x: 8, y: 45 },
  ]
};

const genderGapData = [
  { label: 'Men in Digital Roles', value: 62, percentage: 62, color: '#6b7280' },
  { label: 'Women in Digital Roles', value: 38, percentage: 38, color: '#facc15' },
  { label: 'Men with Digital Credentials', value: 68, percentage: 68, color: '#6b7280' },
  { label: 'Women with Digital Credentials', value: 32, percentage: 32, color: '#facc15' },
];

const digitalTalentData = [
  { label: 'Smart Cities', value: 74, percentage: 74, color: '#0067b1' },
  { label: 'E-Learning', value: 68, percentage: 68, color: '#5cc0de' },
  { label: 'Renewable Energy', value: 57, percentage: 57, color: '#0077b5' },
];

const traditionaEducation = [
  "Bachelor's and Master's Degrees",
  "Traditional Certification Programs",
  "Long-duration Training",
  "Institution-based Recognition",
  "Limited Refresh Options"
];

const digitalCredentials = [
  "Micro-credentials and Badges",
  "Nano-degrees and Certifications",
  "Just-in-time Skills Training",
  "Industry Recognition",
  "Stackable and Refreshable"
];

const Index = () => {
  const [activeChapter, setActiveChapter] = useState(1);
  const { scrollY } = useScrollPosition();
  const chaptersRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const scrollToChapter = (chapter: number) => {
    if (chaptersRef.current[chapter - 1]) {
      chaptersRef.current[chapter - 1]?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    // Update active chapter based on scroll position
    chaptersRef.current.forEach((ref, index) => {
      if (!ref) return;
      
      const rect = ref.getBoundingClientRect();
      // If the chapter is in view
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setActiveChapter(index + 1);
      }
    });
  }, [scrollY]);

  return (
    <main className="relative bg-grey-100">
      <ScrollProgress 
        colorClass="bg-gradient-to-r from-teal-600 via-teal-400 to-yellow-400"
      />
      
      <NavigationDots 
        totalChapters={6} 
        activeChapter={activeChapter} 
        onChange={scrollToChapter}
      />
      
      {/* Fixed Website Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-grey-200">
        <div className="container mx-auto px-6 py-4 flex items-center">
          <img 
            src="/lovable-uploads/b2133f10-47dd-4d13-84a1-e3368fa78f5f.png" 
            alt="Outline India" 
            className="h-16 md:h-20"
          />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-teal-600 text-white pt-20">
        <div 
          className="absolute inset-0 bg-digital-grid bg-digital-grid animate-grid-background opacity-25"
        />
        
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <ScrollySection>
            <div className="text-sm md:text-base font-medium tracking-widest uppercase mb-4 text-yellow-300">
              ADB and LinkedIn Report
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight">
              Digital Jobs and Digital Skills
            </h1>
            <div className="text-2xl md:text-3xl font-light mt-2 mb-8 text-yellow-200">
              A Shifting Landscape in Asia and the Pacific
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 text-white/80">
              This interactive visualization explores how the pandemic transformed hiring trends, 
              the changing landscape of digital skills, and policy implications for the region.
            </p>
            <div className="mt-12">
              <button 
                className="px-6 py-3 bg-yellow-400 text-grey-900 rounded-md font-medium text-lg hover:bg-yellow-300 transition-all"
                onClick={() => scrollToChapter(2)}
              >
                Explore Report
              </button>
            </div>
          </ScrollySection>
        </div>
      </section>
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <ScrollySection>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Comic Image */}
        <div className="w-full md:w-[48%]">
          <img
            src="/lovable-uploads/374176c2-a82e-430b-8814-bd0a3237b395.png"
            alt="Future of Work infographic showing digital transformation journey"
            className="w-full h-auto max-h-[80vh] rounded-xl shadow-lg object-contain"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-[52%]">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">
            Digital Evolution in Asia and the Pacific
          </h2>
          <p className="text-lg text-grey-700 leading-relaxed">
            This comic-style visual captures the dynamic shift in digital employment and skills across the region.
            From rural livelihoods embracing e-commerce to urban sectors demanding data and cloud skills, the image reflects
            the urgency of inclusive digital transformation. Governments and organizations must work together to ensure
            access to upskilling and credentials, bridging both gender and geographic divides.
          </p>
        </div>
      </div>
    </ScrollySection>
  </div>
</section>

      
      {/* Chapter 1: Pandemic's Impact */}
      <div ref={el => chaptersRef.current[0] = el}>
        <ChapterIntro
          chapterNumber={1}
          title="The Pandemic's Impact on Digital Hiring"
          description="How COVID-19 disrupted and then accelerated digital transformation across Asia and the Pacific."
          gradientClass="bg-chapter1-gradient"
        />
        
        <section className="py-20 bg-grey-50">
          <div className="container mx-auto px-6">
            <StickyTextSection>
              <div className="max-w-3xl">
                <h3 className="text-3xl font-bold mb-6 text-teal-600">Digital Hiring Collapsed, Then Surged</h3>
                <p className="text-xl text-grey-700 mb-8">
                  The pandemic initially caused a sharp decline in hiring across all sectors. 
                  However, digital jobs rebounded much faster than non-digital positions, 
                  creating a two-speed recovery pattern that accelerated digital transformation.
                </p>
                <p className="text-lg text-grey-600 mb-4">
                  Digital hiring in India grew by over 50% compared to pre-pandemic levels by 2022, 
                  outpacing both the United States and the broader Southeast Asian region.
                </p>
              </div>
            </StickyTextSection>
            
            <div className="pt-24 pb-24">
              <ScrollySection className="max-w-4xl mx-auto">
                <LineChart data={hiringTrendsData} width={800} height={500} />
              </ScrollySection>
              
              <Quote 
                text="The pandemic accelerated digital transformation by 3-4 years in many Asian economies, creating both challenges and opportunities for workers."
                author="Asian Development Bank"
                role="Digital Jobs Report"
                className="mt-12"
                accentColor="border-l-teal-500"
              />
            </div>
          </div>
        </section>
      </div>
      
      {/* Chapter 2: Skills Shift */}
      <div ref={el => chaptersRef.current[1] = el}>
        <ChapterIntro
          chapterNumber={2}
          title="The Shift in Digital Skills Demand"
          description="Basic skills are foundational—but intermediate and advanced skills drive higher demand and compensation."
          gradientClass="bg-chapter2-gradient"
        />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <ScrollySection>
                <div className="relative order-1">
                  <img 
                    src="/lovable-uploads/d9bfaf13-15d5-45f7-a175-4b59a138cca3.png" 
                    alt="Professional woman analyzing data on computer with growth charts" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </ScrollySection>
              
              <ScrollySection delay={300}>
                <div className="max-w-4xl order-2">
                  <h3 className="text-3xl font-bold mb-6 text-teal-600">Skills Development Focus</h3>
                  <p className="text-lg text-grey-700 mb-8">
                    While basic digital literacy opens doors to entry-level roles, advanced skills 
                    are where opportunity, innovation, and compensation growth lie. Organizations 
                    across Asia and the Pacific are prioritizing intermediate and advanced skill 
                    development to drive digital transformation initiatives.
                  </p>
                  
                  <div className="grid gap-6 mt-8">
                    <div className="bg-grey-50 p-6 rounded-lg border border-grey-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-grey-500 text-white flex items-center justify-center mr-4">
                          <span className="font-bold text-sm">1</span>
                        </div>
                        <h4 className="font-semibold text-lg">Basic Skills</h4>
                      </div>
                      <p className="text-grey-600">Office software, email, basic computing - the foundation for digital participation</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-yellow-400 text-white flex items-center justify-center mr-4">
                          <span className="font-bold text-sm">2</span>
                        </div>
                        <h4 className="font-semibold text-lg">Intermediate Skills</h4>
                      </div>
                      <p className="text-grey-600">Data analysis, project management, digital marketing - driving business value</p>
                    </div>
                    
                    <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center mr-4">
                          <span className="font-bold text-sm">3</span>
                        </div>
                        <h4 className="font-semibold text-lg">Advanced Skills</h4>
                      </div>
                      <p className="text-grey-600">AI/ML, cloud architecture, cybersecurity - leading innovation and transformation</p>
                    </div>
                  </div>
                </div>
              </ScrollySection>
            </div>
            
            <div className="mt-24">
              <Quote 
                text="Countries that focus solely on basic digital skills may fall behind. Advanced digital skills—especially emerging technologies—will drive future economic growth."
                author="LinkedIn Economic Graph"
                role="Data Insights Team"
                accentColor="border-l-yellow-400"
              />
            </div>
          </div>
        </section>
      </div>
      
      {/* Chapter 3: Credentials Reimagined */}
      <div ref={el => chaptersRef.current[2] = el}>
        <ChapterIntro
          chapterNumber={3}
          title="Credentials Reimagined"
          description="How alternative digital credentials are transforming education and workforce development."
          gradientClass="bg-chapter3-gradient"
        />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <ScrollySection>
                <h3 className="text-3xl font-bold text-teal-600 mb-6">The Changing Face of Credentials</h3>
                <p className="text-xl text-grey-700">
                  Traditional degrees remain valuable, but digital credentials are gaining recognition 
                  from employers for their specificity, timeliness, and alignment with industry needs.
                </p>
              </ScrollySection>
            </div>
            
            <SplitComparison 
              leftTitle="Traditional Education Pathways"
              leftItems={traditionaEducation}
              rightTitle="Digital Credentials & Micro-learning"
              rightItems={digitalCredentials}
            />
            
            <div className="mt-20">
              <ScrollySection className="max-w-3xl mx-auto bg-grey-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-grey-800 mb-4">Key Insight</h4>
                <p className="text-lg text-grey-700">
                  In emerging Asian economies, digital credentials are showing 50-70% higher 
                  employment outcomes in technical roles compared to traditional-only education paths.
                </p>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-teal-600 mb-2">68%</div>
                    <div className="text-sm text-grey-600">Higher Interview Rate</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-teal-600 mb-2">53%</div>
                    <div className="text-sm text-grey-600">Faster Skill Update</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-teal-600 mb-2">41%</div>
                    <div className="text-sm text-grey-600">Cost Reduction</div>
                  </div>
                </div>
              </ScrollySection>
            </div>
          </div>
        </section>
      </div>
      
     {/* Chapter 4: Gender & Inclusion Gaps */}
<div ref={el => chaptersRef.current[3] = el}>
  <ChapterIntro
    chapterNumber={4}
    title="Gender & Inclusion Gaps"
    description="Digital transformation risks leaving behind women and other underrepresented groups."
    gradientClass="bg-chapter4-gradient"
  />

  <section className="py-20" style={{ backgroundColor: '#236A74' }}>
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

        {/* Left: Updated image layout */}
        <ScrollySection>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/ebd3efe1-1661-4d31-8a89-c5a70449fac3.png" 
              alt="Diverse team of professionals collaborating on data analysis" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </div>
        </ScrollySection>

        {/* Right: Text content */}
        <ScrollySection delay={200}>
          <div className="text-white max-w-xl">
            <h3 className="text-3xl font-bold mb-6">Bridging the Gender Divide</h3>
            <p className="text-lg text-white/90 mb-4">
              Women remain underrepresented in digital roles across Asia and the Pacific—especially in leadership and high-tech fields.
            </p>
            <p className="text-lg text-white/80 mb-4">
              Ensuring equal access to digital education, mentorship, and career growth opportunities is critical to building inclusive digital economies.
            </p>
            <p className="text-lg text-white/80">
              Inclusive policies, gender-responsive curricula, and workplace equity initiatives can drive meaningful change at scale.
            </p>
          </div>
        </ScrollySection>
      </div>

      <div className="pt-24 pb-12">
        <ScrollySection className="max-w-4xl mx-auto">
          <BarChart data={genderGapData} />
        </ScrollySection>
      </div>

      <div className="max-w-4xl mx-auto pb-20">
        <ScrollySection>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-4">Beyond Gender</h4>
            <p className="text-white/90">
              Digital inclusion challenges extend to rural populations, persons with disabilities, 
              and socioeconomically disadvantaged communities. Comprehensive policies must address 
              all dimensions of the digital divide.
            </p>
          </div>
        </ScrollySection>
      </div>
    </div>
  </section>
</div>
      {/* Chapter 5: Sector Spotlight */}
      <div ref={el => chaptersRef.current[4] = el}>
        <ChapterIntro
          chapterNumber={5}
          title="Sector Spotlight"
          description="Three sectors showing highest digital talent demand across the region."
          gradientClass="bg-chapter5-gradient"
        />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <ScrollySection>
                <div className="relative order-1">
                  <img 
                    src="/lovable-uploads/5dfb9c9a-8c12-4505-967b-61014b3e8a47.png" 
                    alt="Business professional analyzing growth charts and market trends" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </ScrollySection>
              
              <ScrollySection delay={300}>
                <div className="max-w-4xl order-2">
                  <h3 className="text-3xl font-bold text-teal-600 mb-6">Leading Sectors for Digital Talent</h3>
                  <p className="text-xl text-grey-700 mb-8">
                    Smart cities, e-learning, and renewable energy technologies are driving 
                    significant demand for advanced digital skills across the region. These sectors 
                    represent the future of sustainable economic growth in Asia and the Pacific.
                  </p>
                  <p className="text-lg text-grey-600 mb-6">
                    Organizations in these sectors are actively seeking professionals with specialized 
                    digital skills to drive innovation, implement cutting-edge technologies, and 
                    create sustainable solutions for complex challenges.
                  </p>
                  <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                    <h4 className="text-lg font-semibold text-teal-800 mb-3">Digital Skills in High Demand</h4>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                        <span className="text-teal-700">Internet of Things (IoT) development</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                        <span className="text-teal-700">Data science and analytics</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                        <span className="text-teal-700">Cloud computing and DevOps</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                        <span className="text-teal-700">Artificial intelligence and machine learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollySection>
            </div>
            
            <ScrollySection className="max-w-4xl mx-auto mt-12">
              <BarChart data={digitalTalentData} />
            </ScrollySection>
            
            <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <ScrollySection className="bg-white p-6 rounded-xl shadow-md border border-grey-200">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22h12v-6h2v6h6a1 1 0 0 0 1-1V11a1 1 0 0 0-.4-.8l-10-9a1 1 0 0 0-1.2 0l-10 9A1 1 0 0 0 1 11v10a1 1 0 0 1 1Z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Smart Cities</h4>
                <p className="text-grey-600">
                  IoT specialists, data scientists, and systems integrators are in high demand for 
                  urban planning and smart infrastructure projects.
                </p>
              </ScrollySection>
              
              <ScrollySection delay={200} className="bg-white p-6 rounded-xl shadow-md border border-grey-200">
                <div className="w-12 h-12 bg-teal-400 text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                    <path d="M8 7h6"></path>
                    <path d="M8 11h8"></path>
                    <path d="M8 15h6"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">E-Learning</h4>
                <p className="text-grey-600">
                  Instructional designers, learning platform developers, and AI integration specialists are 
                  reshaping education technology.
                </p>
              </ScrollySection>
              
              <ScrollySection delay={400} className="bg-white p-6 rounded-xl shadow-md border border-grey-200">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4V2"></path>
                    <path d="M5 10H3"></path>
                    <path d="M21 10h-2"></path>
                    <path d="m4.6 18.7 1.4-1.4"></path>
                    <path d="M12 17v2"></path>
                    <path d="m18 18.7-1.4-1.4"></path>
                    <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                    <path d="M12 14v3"></path>
                    <path d="m6.3 6.3 1.4 1.4"></path>
                    <path d="m16.3 7.7 1.4-1.4"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Renewable Energy</h4>
                <p className="text-grey-600">
                  Digital skills in grid optimization, energy monitoring systems, and clean tech 
                  are critical for sustainable development.
                </p>
              </ScrollySection>
            </div>
          </div>
        </section>
      </div>
      
      {/* Download Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollySection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-grey-900">Download the Full Report</h2>
              <p className="text-xl text-grey-700 mb-12">
                Get the complete research findings, methodology, and detailed policy recommendations 
                from the ADB and LinkedIn Digital Jobs and Digital Skills report.
              </p>
              
              <div className="max-w-md mx-auto mb-12">
                <div className="bg-grey-50 p-8 rounded-xl shadow-lg border border-grey-200">
                  <h3 className="text-xl font-semibold mb-4 text-teal-600">Full Report</h3>
                  <p className="text-grey-600 mb-6">
                    Complete 78-page report with detailed analysis, data visualizations, and comprehensive policy framework.
                  </p>
                  <button className="w-full px-6 py-3 bg-yellow-400 text-grey-900 rounded-md font-medium hover:bg-yellow-500 transition-all flex items-center justify-center">
                    <Download size={20} className="mr-2" />
                    Download Full Report (PDF)
                  </button>
                </div>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-2">Additional Resources</h4>
                <p className="text-teal-700 mb-4">
                  Access supplementary data sets, methodology notes, and country-specific insights.
                </p>
                <a href="#" className="text-teal-600 hover:text-teal-800 font-medium underline">
                  View all research materials →
                </a>
              </div>
            </div>
          </ScrollySection>
        </div>
      </section>
      
      {/* Conclusion */}
      <div ref={el => chaptersRef.current[5] = el}>
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#236A74' }}>
          <div className="relative z-10 container mx-auto px-6 py-24 text-white">
            <ScrollySection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">What's Next?</h2>
                <p className="text-xl mb-12">
                  The digital transformation of Asia and the Pacific requires coordinated policy action 
                  across education, labor markets, and technology sectors.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">For Policymakers</h4>
                    <p className="text-white/80">
                      Create inclusive digital skills frameworks and infrastructure investments that 
                      reach underserved populations.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">For Educators</h4>
                    <p className="text-white/80">
                      Integrate digital credentials and industry-relevant training into traditional 
                      education pathways.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">For Employers</h4>
                    <p className="text-white/80">
                      Recognize diverse credential pathways and invest in continuous digital upskilling 
                      for the workforce.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollySection>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white text-grey-900 py-12 border-t border-grey-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl text-teal-600">ADB and LinkedIn Report</div>
              <div className="text-grey-600 mt-1">Digital Jobs and Digital Skills</div>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-grey-600 hover:text-teal-600 transition-colors">About</a>
              <a href="#" className="text-grey-600 hover:text-teal-600 transition-colors">Contact</a>
              <a href="#" className="text-grey-600 hover:text-teal-600 transition-colors">Resources</a>
              <a href="#" className="text-grey-600 hover:text-teal-600 transition-colors">Privacy</a>
            </div>
          </div>
          
          <div className="border-t border-grey-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-grey-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Asian Development Bank and LinkedIn. All rights reserved.
            </div>
            <div className="flex items-center">
              <span className="text-grey-500 text-sm mr-3">Made by</span>
              <img 
                src="/lovable-uploads/b2133f10-47dd-4d13-84a1-e3368fa78f5f.png" 
                alt="Outline India" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
