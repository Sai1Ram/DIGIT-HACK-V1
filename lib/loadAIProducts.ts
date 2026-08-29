import { AIProjectDetails, AIProjectJson, AIProjectCategory } from "@/types/AIProject";
import { mapAIProjectJson } from "./DB/ui/mapper";

import vehicleSpeedDetection from "./DB/content/AIProducts/vehicle-speed-detection.json";
import documentScanning from "./DB/content/AIProducts/document-scanning.json";
import aiFashionModel from "./DB/content/AIProducts/ai-fashion-model.json";
import aiNewsAnchor from "./DB/content/AIProducts/ai-news-anchor.json";
import graphicDesignGenai from "./DB/content/AIProducts/graphic-design-genai.json";
import volumeMapping from "./DB/content/AIProducts/volume-mapping.json";
import parkingAllocation from "./DB/content/AIProducts/parking-allocation.json";
import faceRecognition from "./DB/content/AIProducts/face-recognition.json";
import qaDocumentAi from "./DB/content/AIProducts/qa-document-ai.json";
import diseasePrediction from "./DB/content/AIProducts/disease-prediction.json";
import aiImageGeneratorGan from "./DB/content/AIProducts/ai-image-generator-gan.json";
import productRecommendation from "./DB/content/AIProducts/product-recommendation.json";
import ppeDetection from "./DB/content/AIProducts/ppe-detection.json";
import humanDetectionRestricted from "./DB/content/AIProducts/human-detection-restricted.json";
import vehicleDetectionNonparking from "./DB/content/AIProducts/vehicle-detection-nonparking.json";
import railContainerSurvey from "./DB/content/AIProducts/rail-container-survey.json";
import portBerthSafety from "./DB/content/AIProducts/port-berth-safety.json";
import hrCoilTracking from "./DB/content/AIProducts/hr-coil-tracking.json";
import vehicle360Safety from "./DB/content/AIProducts/vehicle-360-safety.json";
import documentAiSystem from "./DB/content/AIProducts/document-ai-system.json";
import boundaryWallDetection from "./DB/content/AIProducts/boundary-wall-detection.json";

// Display order on the page — edit this array to reorder sections;
// nothing else needs to change.
const raw = [
  vehicleSpeedDetection,
  documentScanning,
  aiFashionModel,
  aiNewsAnchor,
  graphicDesignGenai,
  volumeMapping,
  parkingAllocation,
  faceRecognition,
  qaDocumentAi,
  diseasePrediction,
  aiImageGeneratorGan,
  productRecommendation,
  ppeDetection,
  humanDetectionRestricted,
  vehicleDetectionNonparking,
  railContainerSurvey,
  portBerthSafety,
  hrCoilTracking,
  vehicle360Safety,
  documentAiSystem,
  boundaryWallDetection,
] as AIProjectJson[];

export const aiProjects: AIProjectDetails[] = raw.map(mapAIProjectJson);

export const aiProjectCategories: AIProjectCategory[] = [
  "Safety & Surveillance",
  "Logistics & Operations",
  "Generative AI",
  "Document Intelligence",
  "Applied ML",
];
