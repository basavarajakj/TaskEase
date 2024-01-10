const ClerkLayout = ({
children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-screen grid place-items-center">
      {children}
    </div>
  )
}

export default ClerkLayout;