export function PanelDivider() {
  return (
    <div className="screen-divider" aria-hidden="true">
      <span className="mx-4 h-px flex-1 bg-border/60" />
      <span className="label-mono px-3 text-[0.62rem] text-muted-foreground/80">
        section
      </span>
      <span className="mx-4 h-px flex-1 bg-border/60" />
    </div>
  );
}
