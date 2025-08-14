
import React from 'react';
import type { SkillCategory, TimelineItem, ProjectItem, CertificateItem } from './types';

// Generic Icons
const AwsIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto mb-2 text-orange-400"><title>Amazon AWS</title><path d="M13.297 1.745c-.24-.233-.55-.37-.886-.397h-.002c-.338.027-.648.164-.887.397L8.24 4.992l-2.06 4.314-2.22 1.332c-.23.136-.42.32-.55.534-.13.213-.2.45-.2.69v.002c.002.24.072.477.2.69.13.214.32.4.55.533l2.22 1.332 2.06 4.314 3.282 3.247c.24.234.55.37.887.398h.002c.336-.027.646-.164.886-.398l3.282-3.247 2.06-4.314 2.22-1.332c.23-.134.42-.32.55-.534.13-.213.2-.45.2-.69v-.002c-.002-.24-.072-.477-.2-.69-.13-.214-.32-.4-.55-.533l-2.22-1.332-2.06-4.314-3.282-3.247zm-1.33 19.012c-.228 0-.448-.09-.61-.252L8.076 17.26l-2.14-4.48-2.3-1.38c-.16-.095-.27-.245-.333-.42-.062-.174-.06-.36.004-.533.065-.175.174-.325.333-.42l2.3-1.38 2.14-4.48 3.28-3.23c.163-.16.382-.25.61-.25s.447.09.61.25l3.28 3.23 2.14 4.48 2.3 1.38c.16.095.27.245.333.42.062.174.06.36-.004-.533-.065-.175-.174-.325-.333-.42l-2.3 1.38-2.14 4.48-3.28 3.245c-.163.162-.382.252-.61.252zm-3.69-6.322l1.19-2.482-3.72-2.233 3.72-2.23-1.19-2.48L3 10.43zm8.71 0l-1.19-2.482 3.72-2.233-3.72-2.23 1.19-2.48L21 10.43z" fill="currentColor"/></svg>;
const DevOpsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto mb-2 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 11v0a2 2 0 0 0-2-2H8.5a3.5 3.5 0 1 0 3.26-5.5"></path></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto mb-2 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
const OsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto mb-2 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto mb-2 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const WorkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 2.25A.75.75 0 001.5 3v1.558c0 .29.135.559.362.744l2.25 1.956.12.104A1.5 1.5 0 016 8.25v5.5a1.5 1.5 0 01-2.036 1.348l-.12-.052-2.25-1.125a.75.75 0 00-.968.01L.26 14.33a.75.75 0 000 1.06l4.156 4.155a3 3 0 004.242 0L18.98 9.22a3 3 0 000-4.243L14.823.822a3 3 0 00-4.242 0L6.426 4.977a1.5 1.5 0 01-1.664.34l-.12-.052-2.25-1.125a.75.75 0 00-.968.01L1.26 4.47a.75.75 0 000 1.06l.163.163.197.197.042.042a.75.75 0 001.06 0l2.25-2.25a.75.75 0 000-1.06l-.163-.163-.197-.197-.042-.042a.75.75 0 00-1.06 0L2.25 3V2.25zM15 6.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H15zM12 6a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 6zM11.25 9.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM9 12a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 019 12zm-3.75 1.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H5.25z" clipRule="evenodd" /></svg>;
const EducationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.7 2.25c.414 0 .75.336.75.75v.311c.454.062.883.172 1.288.33a.75.75 0 01.52.707v.228a.75.75 0 01-.336.65c-.212.128-.435.242-.668.342V7.5h.336c.414 0 .75.336.75.75v.311c.454.062.883.172 1.288.33a.75.75 0 01.52.707v.228a.75.75 0 01-.336.65c-.212.128-.435.242-.668.342V12h.336c.414 0 .75.336.75.75v.311c.454.062.883.172 1.288.33a.75.75 0 01.52.707v.228a.75.75 0 01-.336.65c-.212.128-.435.242-.668.342V16.5h.336c.414 0 .75.336.75.75v.311c.454.062.883.172 1.288.33a.75.75 0 01.52.707v.228a.75.75 0 01-.336.65c-.212.128-.435.242-.668.342V21a.75.75 0 01-.75.75H.75a.75.75 0 01-.75-.75V2.25c0-.414.336-.75.75-.75h10.95zM4.5 1.5a.75.75 0 00-.75.75V21a.75.75 0 00.75.75h15a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-15z" /><path d="M5.25 4.5c0-.414.336-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM5.25 9c0-.414.336-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM5.25 13.5c0-.414.336-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM5.25 18c0-.414.336-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" /></svg>;
const CertificateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-cyan-400"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 01-1.307 3.498 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75c-1.357 0-2.573-.6-3.397-1.549a4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.498 4.491 4.491 0 013.497-1.307zm3.397 1.549a2.25 2.25 0 00-3.397 0A2.25 2.25 0 005.303 8.603a2.25 2.25 0 000 3.397A2.25 2.25 0 008.603 15.3l3.397 3.397a2.25 2.25 0 003.397 0l3.397-3.397a2.25 2.25 0 000-3.397A2.25 2.25 0 0015.3 5.303a2.25 2.25 0 00-3.397 0z" clipRule="evenodd" /><path d="M16.705 9.295a.75.75 0 00-1.06-1.06l-5.636 5.636a.75.75 0 001.06 1.06l5.636-5.636z" /></svg>;


export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Cloud Platform',
    skills: [
      { name: 'AWS', icon: <AwsIcon /> },
      { name: 'IAM', icon: <AwsIcon /> },
      { name: 'EC2', icon: <AwsIcon /> },
      { name: 'S3', icon: <AwsIcon /> },
      { name: 'RDS', icon: <AwsIcon /> },
      { name: 'Lambda', icon: <AwsIcon /> },
      { name: 'VPC', icon: <AwsIcon /> },
      { name: 'CloudWatch', icon: <AwsIcon /> },
      { name: 'Bash', icon: <CodeIcon /> },
    ],
  },
  {
    title: 'DevOps Tools',
    skills: [
      { name: 'Git', icon: <DevOpsIcon /> },
      { name: 'Maven', icon: <DevOpsIcon /> },
      { name: 'Ansible', icon: <DevOpsIcon /> },
      { name: 'Jenkins', icon: <DevOpsIcon /> },
      { name: 'Docker', icon: <DevOpsIcon /> },
      { name: 'Kubernetes', icon: <DevOpsIcon /> },
      { name: 'Terraform', icon: <DevOpsIcon /> },
      { name: 'Prometheus', icon: <DevOpsIcon /> },
      { name: 'Grafana', icon: <DevOpsIcon /> },
    ],
  },
  {
    title: 'Databases',
    skills: [{ name: 'MySQL', icon: <DatabaseIcon /> }],
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Linux', icon: <OsIcon /> },
      { name: 'Windows', icon: <OsIcon /> },
    ],
  },
  {
    title: 'Programming',
    skills: [{ name: 'Python', icon: <CodeIcon /> }],
  },
];

export const EXPERIENCE_DATA: TimelineItem[] = [
    {
    title: 'Cloud Engineer Trainee',
    subtitle: 'Tech Mahindra Smart Academy',
    date: '04/2025 – 07/2025',
    details: [
      'Gained hands-on experience with core AWS services including EC2, S3, IAM, Lambda, and VPC.',
      'Participated in automation tasks to streamline cloud infrastructure management.',
      'Utilized CloudWatch for monitoring system health and performance metrics.',
    ],
    icon: <WorkIcon/>
  },
  {
    title: 'DevOps Intern',
    subtitle: 'Code Tech IT Solutions',
    date: '09/2024 – 12/2024',
    details: [
      'Built and maintained CI/CD pipelines using Jenkins and Git for seamless code integration.',
      'Managed containerized applications using Docker and Kubernetes for deployment.',
      'Implemented AWS services like EC2, S3, and Lambda for scalable solutions.',
      'Monitored application performance with AWS CloudWatch and Grafana.',
    ],
    icon: <WorkIcon/>
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    image: 'https://picsum.photos/seed/project1/400/300',
    title: 'Prepaid Energy Meters',
    date: 'Jan 2024 – Mar 2024',
    description: 'Designed and implemented a smart prepaid electricity metering system using Arduino, RFID, and energy measurement sensors. Enabled real-time consumption monitoring, secure prepaid recharge, and automatic disconnection on credit depletion with low-balance alerts. The system eliminates manual billing errors, improves payment collection, encourages energy conservation, and offers a cost-effective, scalable solution suitable for both residential and commercial applications.',
    tags: ['Arduino', 'RFID', 'Sensors', 'IoT'],
  },
  {
    image: 'https://picsum.photos/seed/project2/400/300',
    title: 'Automated CI/CD Pipeline with Jenkins',
    date: '',
    description: 'Designed and implemented a fully automated CI/CD pipeline to streamline application build, testing, and deployment processes. Containerized applications using Docker and deployed them on AWS ECS for scalable and reliable hosting. Integrated CloudWatch for real-time monitoring, logging, and alerting to ensure optimal application performance and quick issue resolution.',
    tags: ['Jenkins', 'Docker', 'AWS ECS', 'CloudWatch', 'CI/CD'],
  },
  {
    image: 'https://picsum.photos/seed/project3/400/300',
    title: 'Infrastructure as Code (IaC) with Terraform',
    date: '',
    description: 'Developed and deployed AWS infrastructure resources including EC2 instances, VPCs, and S3 buckets using Terraform for repeatable, version-controlled provisioning. Automated server configuration and application deployment using Ansible, ensuring consistent environments, reduced manual intervention, and faster delivery cycles.',
    tags: ['Terraform', 'Ansible', 'AWS', 'IaC', 'VPC', 'EC2'],
  },
];


export const EDUCATION_DATA: TimelineItem[] = [
  {
    title: 'BTech in Electrical and Electronics Engineering',
    subtitle: 'Malla Reddy Engineering College',
    date: '2020 – 2024',
    details: ['CGPA: 7.37'],
    icon: <EducationIcon/>,
  },
  {
    title: 'Intermediate (MPC)',
    subtitle: 'TS Boys Residential Junior College',
    date: '2018 – 2020',
    details: ['Percentage: 88.8%'],
    icon: <EducationIcon/>,
  },
  {
    title: 'SSC',
    subtitle: 'TS Boys Residential School',
    date: '2018',
    details: ['CGPA: 9.0'],
    icon: <EducationIcon/>,
  },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
    { name: 'AWS DevOps Course Completion Certificate', icon: <CertificateIcon/> },
    { name: 'AWS APAC-Solution Architecture Job Simulation', icon: <CertificateIcon/> },
    { name: 'DevOps Intern Certificate – CodeTech IT Solutions', icon: <CertificateIcon/> },
];
