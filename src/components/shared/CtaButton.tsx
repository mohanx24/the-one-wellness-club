import { Link } from 'react-router';

interface CtaButtonBaseProps {
  children: React.ReactNode;
  className?: string;
}

interface CtaLinkProps extends CtaButtonBaseProps {
  to: string;
  onClick?: never;
}

interface CtaButtonClickProps extends CtaButtonBaseProps {
  to?: never;
  onClick: () => void;
}

type CtaButtonProps = CtaLinkProps | CtaButtonClickProps;

export default function CtaButton({ children, to, onClick, className = '' }: CtaButtonProps) {
  const baseClassName = `btn-red-gradient px-8 py-4 rounded-full font-body text-sm font-semibold uppercase tracking-wide text-white ${className}`;

  if (to) {
    return (
      <Link to={to} className={`inline-block ${baseClassName}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClassName}>
      {children}
    </button>
  );
}
