<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\MusicRepository;
use Symfony\Component\Serializer\SerializerInterface;

class ApimusicController extends AbstractController
{
    #[Route('/api/music', name: 'app_apimusic')]
    public function index(MusicRepository $em, SerializerInterface $serializer)
    {
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $allMusic = $em->findAll();
        $response->setContent($serializer->serialize($allMusic, 'json'));
        return $response;
    }
}
