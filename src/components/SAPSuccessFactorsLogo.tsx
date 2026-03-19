import logoImage from 'figma:asset/450fe34d1263d99139d5a24bade4102615da83ac.png';

export function SAPSuccessFactorsLogo({ className = '' }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="SAP SuccessFactors" 
      className={className}
    />
  );
}
