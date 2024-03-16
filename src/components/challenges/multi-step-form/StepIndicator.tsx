import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import { currentStep } from "./StepProvider";

const indicator = {
  active: {
    backgroundColor: "var(--pastel-blue)",
    color: "var(--marine-blue)",
  },
  inactive: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "rgba(255,255,255,1)",
  },
};

function StepIndicator() {
  const $currentStep = useStore(currentStep);

  return (
    <ul>
      <li className={`step-indicator`}>
        <motion.span
          animate={$currentStep === 1 ? "active" : "inactive"}
          variants={indicator}
        >
          1
        </motion.span>
        <div>
          <p>Paso 1</p>
          <h2>Datos de la solicitud</h2>
        </div>
      </li>
      <li className={`step-indicator`}>
        <motion.span
          animate={$currentStep === 2 ? "active" : "inactive"}
          variants={indicator}
        >
          2
        </motion.span>
        <div>
          <p>Paso 2</p>
          <h2>Categoría de Cambio</h2>
        </div>
      </li>
      <li className={`step-indicator`}>
        <motion.span
          animate={$currentStep === 3 ? "active" : "inactive"}
          variants={indicator}
        >
          3
        </motion.span>
        <div>
          <p>Paso 3</p>
          <h2>Causa o origen de cambio</h2>
        </div>
      </li>
      <li className={`step-indicator`}>
        <motion.span
          animate={$currentStep >= 4 ? "active" : "inactive"}
          variants={indicator}
        >
          4
        </motion.span>
        <div>
          <p>Step 4</p>
          <h2>Summary</h2>
        </div>
      </li>
    </ul>
  );
}

export default StepIndicator;
