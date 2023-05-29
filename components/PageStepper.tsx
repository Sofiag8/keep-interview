import React from "react";

interface PageStepperProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSelectPage: (pageNumber: number) => void;
}

const PageStepper: React.FC<PageStepperProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onSelectPage,
}) => {
  return (
    <>
      <div
        className="horizontal-stack"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={onPrevPage} disabled={currentPage === 1}>
          {"< Back"}
        </button>
        <select
          value={currentPage}
          onChange={(e) => onSelectPage(Number(e.target.value))}
          style={{ marginBottom: 0 }}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <option key={pageNumber} value={pageNumber}>
                {pageNumber}
              </option>
            )
          )}
        </select>
        <button onClick={onNextPage} disabled={currentPage === totalPages}>
          {"Next >"}
        </button>
      </div>
      <style jsx>{`
        .horizontal-stack > * + * {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default PageStepper;
