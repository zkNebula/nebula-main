import Navigation from '../../components/navigation/navigation';

export const metadata = {
  title: 'zkNebula',
  description: 'zkNebula is an extraordinary decentralized autonomous organization (DAO) project that has been developed to be entirely community-driven, providing the blockchain community with complete control over all decisions, contributions, and participation within the protocol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation 
        scrollPositionProp
        showLinks={false} 
        border 
      />

      <main className='mt-36 mb-6 xs:mt-28 md:mt-20 py-4 w-[85%] mx-auto'>
        {children}
      </main>
    </>  
  )
}

