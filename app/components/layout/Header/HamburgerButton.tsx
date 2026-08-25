type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HamburgerButton({
  isOpen,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isOpen}
      aria-label="Open navigation"
      className="
        flex
        h-12
        w-12
        flex-col
        items-end
        justify-center
        gap-[7px]
        cursor-pointer
      "
    >
      <span className="h-px w-8 bg-current" />
      <span className="h-px w-8 bg-current" />

      <span className="h-px w-4 bg-current" />
    </button>
  );
}