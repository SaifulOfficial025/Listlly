import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropertyInformation from './PropertyInformation';
import ListPrice from './ListPrice';
import SelectPlan from './SelectPlan';
import TitleDocumentations from './TitleDocumentations';
import Commission from './Commission';
import PhotosDescription from './PhotosDescription';
import ReviewPublish from './ReviewPublish';
import PropertyDetailsSuccess from './PropertyDetailsSuccess';

function ListPropertyFlow() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state?.propertyAddress || {};
  
  const [currentStep, setCurrentStep] = useState(0);
  const [flowData, setFlowData] = useState({
    propertyAddress: initialData,
    propertyInformation: {},
    listPrice: {},
    selectedPlan: {},
    titleDocumentations: {},
    commission: {},
    photosDescription: {},
    contactInformation: {}
  });

  // Debug effect to track state changes
  useEffect(() => {
    console.log('Current step changed to:', currentStep);
    console.log('Current component:', steps[currentStep]?.component.name);
  }, [currentStep]);

  const steps = [
    { component: PropertyInformation, key: 'propertyInformation', name: 'Property Information' },
    { component: ListPrice, key: 'listPrice', name: 'List Price' },
    { component: SelectPlan, key: 'selectedPlan', name: 'Select Plan' },
    { component: TitleDocumentations, key: 'titleDocumentations', name: 'Title & Documentations' },
    { component: Commission, key: 'commission', name: 'Commission' },
  { component: PhotosDescription, key: 'photosDescription', name: 'Photos & Description' },
  { component: ReviewPublish, key: 'reviewPublish', name: 'Review & Publish' },
  { component: PropertyDetailsSuccess, key: 'final', name: 'Success' }
  ];

  const handleContinue = (stepData) => {
    const currentStepKey = steps[currentStep].key;
    console.log('Flow handleContinue called:', { currentStep, currentStepKey, stepData });
    
    setFlowData(prev => ({
      ...prev,
      [currentStepKey]: stepData
    }));

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      console.log('Moving to next step:', currentStep + 1);
    } else {
      // Flow completed - could navigate to a success page or dashboard
      console.log('Flow completed with data:', { ...flowData, [currentStepKey]: stepData });
      navigate('/dashboard/selling_properties');
    }
  };

  const handleCancel = () => {
    navigate('/dashboard/selling_properties');
  };

  const CurrentStepComponent = steps[currentStep].component;

  if (currentStep === steps.length - 1) {
    // Final step - show property details
    return <PropertyDetailsSuccess propertyData={flowData} />;
  }

  return (
    <div>

      
      <CurrentStepComponent 
        onContinue={handleContinue}
        onCancel={handleCancel}
        data={flowData[steps[currentStep].key]}
      />
    </div>
  );
}

export default ListPropertyFlow;
